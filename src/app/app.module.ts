import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; 


import { AppComponent } from './app.component';
import { CoursesComponent } from './courses/courses.component';
import { CourseDetailComponent } from './course-detail/course-detail.component';
import { AppRoutingModule } from './/app-routing.module';
import { GenerateGpaComponent } from './generate-gpa/generate-gpa.component';
import { GetCourseDetailComponent } from './get-course-detail/get-course-detail.component';


import { GradeService } from './grade.service';
import { CourseService } from './course.service';



@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    CourseDetailComponent,
    GenerateGpaComponent,
    GetCourseDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [
    CourseService,
    GradeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
