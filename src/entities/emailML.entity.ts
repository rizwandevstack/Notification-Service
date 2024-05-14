import { Entity, Column, JoinColumn, OneToOne, PrimaryColumn } from 'typeorm';
import { Email } from './email.entity';

@Entity('email_ml')
export class EmailMl {
  @PrimaryColumn({ name: 'email_id' })
  emailId: number;

  @OneToOne(() => Email, (email) => email.emailMl)
  @JoinColumn({ name: 'email_id' })
  email: Email;

  @Column({ name: 'lang_id' })
  langId: number;

  @Column({ length: 255 })
  subject: string;

  @Column('text')
  body: string;

  @Column({ length: 255, nullable: true })
  cc: string;

  @Column({ length: 255, nullable: true })
  bcc: string;

  @Column({ name: 'is_active', type: 'smallint', default: 1 })
  isActive: number;
}
