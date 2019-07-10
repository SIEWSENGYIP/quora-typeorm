import {Entity, PrimaryGeneratedColumn, Column, OneToMany} from "typeorm";
import {Question} from "./Question";
import {Answer} from "./Answer";

@Entity({name: "users"})
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    email: string;

    @OneToMany(type => User, user => user.questions)
    questions: Question[]

    @OneToMany(type => User, user => user.answers)
    answers: Answer[]

}
