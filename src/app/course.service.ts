import { Injectable } from '@angular/core';
import { Course } from './course';
import { GradeService } from './grade.service';

@Injectable()
export class CourseService {

  credits: number[] = [];
  courses: Course[] = [];
  

  constructor() { }

  addCourse(course: Course) {

    this.courses.push(course);

  }

  creditValues(value: number){

    this.credits.push(value);

  }

  clear(){
    this.courses = [];
    this.credits = [];
  }

}
