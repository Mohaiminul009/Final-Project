import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ClassroomComponent } from './classroom/classroom.component';
import { CourseComponent } from './course/course.component';
import { BlogComponent } from './blog/blog.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { CourseDetailsComponent } from './course-details/course-details.component';
import { ADashboardComponent } from './a-dashboard/a-dashboard.component';
import { ACourseComponent } from './a-course/a-course.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SearchComponent } from './search/search.component';
import { AClassroomComponent } from './a-classroom/a-classroom.component';
import { ACourseViewComponent } from './a-course-view/a-course-view.component';
import { ACourseEditComponent } from './a-course-edit/a-course-edit.component';
import { InstructorFormComponent } from './instructor-form/instructor-form.component';
import { InstructorComponent } from './instructor/instructor.component';
import { InstructorEditComponent } from './instructor-edit/instructor-edit.component';
import { CartComponent } from './cart/cart.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ClassroomComponent,
    CourseComponent,
    BlogComponent,
    LoginComponent,
    RegisterComponent,
    AboutUsComponent,
    CourseDetailsComponent,
    ADashboardComponent,
    ACourseComponent,
    DashboardComponent,
    HeaderComponent,
    FooterComponent,
    SearchComponent,
    AClassroomComponent,
    ACourseViewComponent,
    ACourseEditComponent,
    InstructorFormComponent,
    InstructorComponent,
    InstructorEditComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
