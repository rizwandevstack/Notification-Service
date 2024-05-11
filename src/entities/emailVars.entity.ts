import { Entity, PrimaryColumn, Column } from 'typeorm';

@Entity('email_vars')
export class EmailVar {
  @PrimaryColumn({ length: 255 })
  name: string;

  @Column({ length: 255, nullable: true })
  value: string;

  @Column({ default: true })
  isActive: boolean;
}
