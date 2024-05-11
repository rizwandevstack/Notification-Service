import { Entity, Column, JoinColumn, OneToOne, PrimaryColumn } from 'typeorm';
import { SMS } from './sms.entity';

@Entity('sms_ml')
export class SMSMl {

    @PrimaryColumn({name: 'sms_id'})
    smsId: number;

    @OneToOne(() => SMS, (sms) => sms.smsMl)
    @JoinColumn({ name: 'sms_id' })
    sms: SMS;

    @Column({ name: 'lang_id' })
    langId: number;
    
    @Column('text')
    body: string;

    @Column({ default: true })
    isActive: boolean;
}
