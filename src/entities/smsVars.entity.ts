import { Entity, PrimaryColumn, Column } from 'typeorm';

@Entity('sms_vars')
export class SMSVar {
  @PrimaryColumn({ length: 255 })
  name: string;

  @Column({ length: 255, nullable: true })
  value: string;

  @Column({ default: true })
  isActive: boolean;
}
