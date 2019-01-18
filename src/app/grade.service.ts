import { Injectable } from '@angular/core';
import { Course } from './course';
import { grades } from './grade';
import { CourseService } from './course.service';

@Injectable()
export class GradeService {

  grade = grades;
  weightedPoints: number[] = [];
  creditSum: number;

  constructor(private courseService: CourseService) { }

  getGradePoints(gradeValue: string) {

    return this.grade[gradeValue];

  }

  getWeightedPoints(creditValue: number, gradePoints: number) {

    let weightedPoint = creditValue * gradePoints;
    this.weightedPoints.push(weightedPoint);

  }

  getGPA(){

    let creditSum = 0, weightedPointSum = 0;
    for (const credit of this.courseService.credits) {
      creditSum +=  Number(credit);
    }
    this.creditSum = creditSum;
    
    for (const weightedPoint of this.weightedPoints) {
      weightedPointSum += weightedPoint;
    }
    if (!isNaN((weightedPointSum / creditSum))) {
      return (weightedPointSum / creditSum ).toPrecision(3);
    } 
    if (!isFinite((weightedPointSum / creditSum))) {
      return "No Data";
    }
    else {
      return "No Data";
    }

  }

  clear(){
    this.weightedPoints = [];
  }

  
  // getGrade(course: Course){

  //   if (course.score < 40 ) {
  //     return this.grade[0];
  //   }
  //   if (course.score >= 40 && course.score < 45) {
  //     return this.grade[1];
  //   }
  //   if (course.score >= 45 && course.score < 50) {
  //     return this.grade[1.5];
  //   }
  //   if (course.score >= 50 && course.score < 55) {
  //     return this.grade[2];
  //   }
  //   if (course.score >= 55 && course.score < 60) {
  //     return this.grade[2.5];
  //   }
  //   if (course.score >= 60 && course.score < 70) {
  //     return this.grade[3];
  //   }
  //   if (course.score >= 70 && course.score < 80) {
  //     return this.grade[3.5];
  //   }
  //   if (course.score >= 80 && course.score <= 100) {
  //     return this.grade[4];
  //   }
  //   else {
  //     return 'Not Found';
  //   }

  // } 
  


}
