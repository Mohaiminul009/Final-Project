import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { BlogComponent } from './blog/blog.component';
import { ClassroomComponent } from './classroom/classroom.component';
import { CourseDetailsComponent } from './course-details/course-details.component';
import { CourseComponent } from './course/course.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:"", redirectTo:"/home", pathMatch:"full"},
  {path:"home", component:HomeComponent},
  {path:"classroom", component:ClassroomComponent},
  {path:"course", component:CourseComponent},
    // children: [
    //   {path:"coursedetails", component:CourseDetailsComponent}
    // ]
  {path:"blog", component:BlogComponent},
  {path:"aboutus", component:AboutUsComponent},
  {path:"coursedetails", component:CourseDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
