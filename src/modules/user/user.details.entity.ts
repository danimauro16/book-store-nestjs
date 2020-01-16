import {
  BaseEntity,
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn
} from "typeorm";

@Entity("user_details")
export class UserDetails extends BaseEntity {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column({ type: "varchar", length: 50, nullable: true })
  name: string;

  @Column({ type: "varchar", nullable: true })
  lastname: string;

  @Column({ type: "varchar", default: "ACTIVE", length: 8, nullable: false })
  status: string;

  @CreateDateColumn({ type: "timestamp", name: "created_at", nullable: false })
  createAt: Date;

  @UpdateDateColumn({ type: "timestamp", name: "update_at", nullable: false })
  updateAt: Date;
}
