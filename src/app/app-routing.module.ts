import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ACourseComponent } from './a-course/a-course.component';
import { ADashboardComponent } from './a-dashboard/a-dashboard.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { BlogComponent } from './blog/blog.component';
import { ClassroomComponent } from './classroom/classroom.component';
import { CourseDetailsComponent } from './course-details/course-details.component';
import { CourseComponent } from './course/course.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:"", redirectTo:"/home", pathMatch:"full"},
  {path:"home", component:HomeComponent},
  {path:"classroom", component:ClassroomComponent},
  {path:"course", component:CourseComponent},
  {path:"blog", component:BlogComponent},
  {path:"aboutus", component:AboutUsComponent},
  {path:"coursedetails", component:CourseDetailsComponent},
  {path:"adashboard", component:ADashboardComponent}
  // {path:"", redirectTo:"/dashboard", pathMatch:"full"},
  // {path:"dashboard", component:DashboardComponent},
  // {path:"acourse", component:ACourseComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
