import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursesComponent } from './courses/courses.component';

const routes: Routes = [
  { path: "", pathMatch: "full", redirectTo: "/"},
  { path: '', component: CoursesComponent }
]; 

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ]
})

export class AppRoutingModule { 
}
