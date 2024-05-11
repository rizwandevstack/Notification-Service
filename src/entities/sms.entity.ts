import { Entity, PrimaryGeneratedColumn, Column, OneToMany, OneToOne } from 'typeorm';
import { SMSMl } from './smsML.entity'

@Entity('sms')
export class SMS {
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
  
  @OneToOne(() => SMSMl, (smsMl) => smsMl.sms)
  smsMl: SMSMl;
}
