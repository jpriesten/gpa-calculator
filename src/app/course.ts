import { grades } from "./grade";

export class Course{
    
    id: string;
    name: string;
    grade: string;
    credit: number;

    constructor(id: string, name: string, credit: number, grade: string){
        this.id = id;
        this.name = name;
        this.credit = credit;
        this.grade = grade;
    }


}