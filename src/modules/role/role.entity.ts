import {
  BaseEntity,
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToMany,
  JoinColumn,
  CreateDateColumn,
  UpdateDateColumn
} from "typeorm";
import { User } from "../user/user.entity";

@Entity("roles")
export class Role extends BaseEntity {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column({ type: "varchar", length: 20, nullable: false })
  name: string;

  @Column({ type: "text", nullable: false })
  description: string;

  @Column({ type: "varchar", default: "ACTIVE", length: 8, nullable: false })
  status: string;

  @CreateDateColumn({ type: "timestamp", name: "created_at" })
  createAt: Date;

  @UpdateDateColumn({ type: "timestamp", name: "update_at" })
  updateAt: Date;

  @ManyToMany(
    type => User,
    user => user.roles
  )
  @JoinColumn()
  users: User[];
}