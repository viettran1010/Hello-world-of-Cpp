import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToOne, JoinColumn } from 'typeorm';
import { Pupil } from './Pupil';

@Entity('pencils')
export class Pencil extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    created_at: Date;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP' })
    updated_at: Date;

    @Column()
    brand: string;

    @Column()
    color: string;

    @Column('float')
    length: number;

    @Column()
    type: string;

    @Column({ type: 'int' })
    pupil_id: number;

    @ManyToOne(() => Pupil, pupil => pupil.pencils)
    @JoinColumn({ name: 'pupil_id' })
    pupil: Pupil;
}