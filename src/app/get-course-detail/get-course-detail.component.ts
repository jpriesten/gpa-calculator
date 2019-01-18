import { Component, OnInit } from '@angular/core';
import { Course } from '../course';
import { grades } from '../grade';
import { GradeService } from '../grade.service';
import { CourseService } from '../course.service';

@Component({
  selector: 'app-get-course-detail',
  templateUrl: './get-course-detail.component.html',
  styleUrls: ['./get-course-detail.component.css']
})
export class GetCourseDetailComponent implements OnInit {

  Grades: string[] = [
    'A', 'B+', 'B', 'C+', 'C', 'D+', 'D', 'F'
  ]

  credits: number[] = [
    2, 4, 6, 12
  ]

  credit: any;
  
  info = new Course(null,'',null,null);


  constructor(private gradeService: GradeService, private courseService: CourseService) { }


  addCourse(code: string, name: string, credit: number, grade: string){
    let info = new Course(code,name,credit,grade);
    this.courseService.addCourse(info);
  }

  creditValues(credit){

    this.courseService.creditValues(credit);
    
  }

  ngOnInit() {
  }

}
