import { Entity, PrimaryGeneratedColumn, Column, OneToMany, OneToOne } from 'typeorm';
import { EmailMl } from './emailML.entity'

@Entity('emails')
export class Email {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 255 })
  name: string;

  @Column({ length: 255, nullable: true })
  description: string;

  @Column({
    type: 'enum',
    enum: ['A', 'V', 'B'],
  })
  type: 'A' | 'V' | 'B';

  @OneToOne(() => EmailMl, (emailMl) => emailMl.email)
  emailMl: EmailMl;
}
