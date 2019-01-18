import { Component, OnInit } from '@angular/core';
import { Course } from '../course';
import { CourseService } from '../course.service';
import { GradeService} from '../grade.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  selectedCourse: Course;
  courses: Course;
  gpa: any;
  info: any;
  value: any;


  constructor(private courseService: CourseService, private gradeService: GradeService) { }


  showGPA(){
    this.gpa = this.gradeService.getGPA();
  }

  clear(){
    this.courseService.clear();
    this.gradeService.clear();
    this.showGPA();
  }

  onSelect(course: Course): void{
    this.selectedCourse = course;
  }

  ngOnInit() {
  }

}
