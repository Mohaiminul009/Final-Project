import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Course } from '../Model/course.model';
import { Instructor } from '../Model/instructor.model';
import { CartService } from '../Service/cart.service';
import { CourseService } from '../Service/course.service';
import { InstructorService } from '../Service/instructor.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit{

  courses: Course[] = [];
  form!: FormGroup;

  constructor(public courseService: CourseService,
    public cartService: CartService,
    public instructorService: InstructorService){}

  ngOnInit(): void {
    this.courseService.getAll().subscribe((data: Course[]) => {
      this.courses = data;
    })

    this.form = new FormGroup({
      ccourseCname :new FormControl(this.courses.courseName),
      courseCduration :new FormControl(this.course.courseDuration),
      courseCarticle :new FormControl(this.course.courseArticle) ,
      courseCresource :new FormControl(this.course.courseResource) ,
      courseCaccess :new FormControl(this.course.courseAccess) ,
      courseCinstructorName :new FormControl(this.course.instructorName2) ,
      courseCprice :new FormControl(this.course.coursePrice) ,
      courseCuploadDate :new FormControl(this.course.courseUploadDate) 
    })
    
  }
  submit(){
    console.log(this.form.value);
    this.cartService.create(this.form.value).subscribe((res:any) => {})
  }

}
