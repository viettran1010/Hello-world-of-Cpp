import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, OneToMany } from 'typeorm';
import { Pencil } from './Pencil';

@Entity('pupils')
export class Pupil extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    created_at: Date;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP' })
    updated_at: Date;

    @Column()
    first_name: string;

    @Column()
    last_name: string;

    @Column({ type: 'date' })
    date_of_birth: Date;

    @Column({ type: 'date' })
    enrollment_date: Date;

    @Column()
    grade: string;

    @OneToMany(() => Pencil, pencil => pencil.pupil)
    pencils: Pencil[];
}