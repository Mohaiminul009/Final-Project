import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AClassroomComponent } from './a-classroom/a-classroom.component';
import { ACourseEditComponent } from './a-course-edit/a-course-edit.component';
import { ACourseViewComponent } from './a-course-view/a-course-view.component';
import { ACourseComponent } from './a-course/a-course.component';
import { ADashboardComponent } from './a-dashboard/a-dashboard.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { AcoursesEditComponent } from './acourses-edit/acourses-edit.component';
import { BlogComponent } from './blog/blog.component';
import { CartComponent } from './cart/cart.component';
import { ClassroomComponent } from './classroom/classroom.component';
import { CourseDetailsComponent } from './course-details/course-details.component';
import { CourseComponent } from './course/course.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { InstructorEditComponent } from './instructor-edit/instructor-edit.component';
import { InstructorFormComponent } from './instructor-form/instructor-form.component';
import { InstructorComponent } from './instructor/instructor.component';
import { InstructorseditComponent } from './instructorsedit/instructorsedit.component';
import { LoginCopyComponent } from './login-copy/login-copy.component';
import { LoginComponent } from './login/login.component';
import { PaymentMethodComponent } from './payment-method/payment-method.component';
import { RegisterComponent } from './register/register.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
  {path:"", redirectTo:"/home", pathMatch:"full"},
  {path:"home", component:HomeComponent},
  {path:"login", component:LoginComponent},
  {path:"register", component:RegisterComponent},
  {path:"search", component:SearchComponent},
  {path:"classroom", component:ClassroomComponent},
  {path:"course", component:CourseComponent},
  {path:"blog", component:BlogComponent},
  {path:"aboutus", component:AboutUsComponent},
  {path:"coursedetails/:uCourseId", component:CourseDetailsComponent},
  {path:"instructorform", component:InstructorFormComponent},
  {path:"cart", component:CartComponent},
  {path:"paymentmethod", component:PaymentMethodComponent},
  {path:"loginforpay", component:LoginCopyComponent},
  {path:"adashboard", component:ADashboardComponent,
  children: [
  {path:'', component:DashboardComponent},
  {path:"acourse", component:ACourseComponent},
  {path:"acourseview", component:ACourseViewComponent},
  {path:"acourseedit/:courseCatId", component:ACourseEditComponent},
  {path:"acourses/:courseId", component:AcoursesEditComponent},
  {path:"aclassroom", component:AClassroomComponent},
  {path:"instructor", component:InstructorComponent},
  {path:"instructoredit/:applicantId", component:InstructorEditComponent},
  {path:"instructorsedit/:instructorId", component:InstructorseditComponent}
  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
