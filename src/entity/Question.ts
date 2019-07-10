import {Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne, JoinColumn} from "typeorm";
import {Answer} from "./Answer";
import {User} from "./User";

@Entity({name: "questions"})
export class Question {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    description: string;

    @Column()
    user_id: number;
    
    @OneToMany(type => Answer, answer => answer.question)
    answers: Answer[]

    @ManyToOne(type => User, user => user.questions)
    @JoinColumn({name: "user_id"})
    user: User

}
