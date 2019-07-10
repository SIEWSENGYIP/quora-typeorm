import {Entity, PrimaryGeneratedColumn, Column,  ManyToOne, JoinColumn, OneToMany} from "typeorm";
import {Question} from "./Question";
import {User} from "./User";

@Entity({name: "answers"})
export class Answer {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    text: string;

    @Column()
    question_id: number;

    @Column()
    user_id: number;

    @ManyToOne(type => Question, question => question.answers)
    @JoinColumn({name: "question_id"})
    question: Question

    @ManyToOne(type => User, user => user.answers)
    @JoinColumn({name: "user_id"})
    user: User
}
