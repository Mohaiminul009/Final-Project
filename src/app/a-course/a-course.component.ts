import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Course } from '../Model/course.model';
import { CourseCategory } from '../Model/coursecategory.model';
import { Instructor } from '../Model/instructor.model';
import { CourseCategoryService } from '../Service/course-category.service';
import { CourseFileService } from '../Service/course-file-service.service';
import { CourseService } from '../Service/course.service';
import { InstructorService } from '../Service/instructor.service';

@Component({
  selector: 'app-a-course',
  templateUrl: './a-course.component.html',
  styleUrls: ['./a-course.component.css']
})
export class ACourseComponent implements OnInit{

  form!: FormGroup;

  categories: CourseCategory[] = [];
  instructors: Instructor[] = [];
  form1!: FormGroup;
  
  courses: Course[] = [];
  form2!: FormGroup;
  file!:File;

  constructor(
    public courseCatService: CourseCategoryService,
    public courseService: CourseService,
    public instructorService: InstructorService,
    private router: Router,

    public courseFileService: CourseFileService
  ) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      courseCatName: new FormControl('', Validators.required)
    })

    this.form1 = new FormGroup({
      course_cat_id: new FormControl('', Validators.required),
      instructor_id: new FormControl('', Validators.required),
      courseCatName: new FormControl('', Validators.required),
      instructorName: new FormControl('', Validators.required),

      courseName: new FormControl('', Validators.required),
      courseUploadDate: new FormControl('', Validators.required),
      courseDuration: new FormControl('', Validators.required),
      courseArticle: new FormControl('', Validators.required),
      courseResource: new FormControl('', Validators.required),
      courseAccess: new FormControl('', Validators.required),
      courseDescription: new FormControl('', Validators.required),
      courseCurriculum: new FormControl('', Validators.required),
      coursePrice: new FormControl('', Validators.required),
      courseDiscount: new FormControl('', Validators.required)
    })

    this.form2 = new FormGroup({
      courseId: new FormControl('', Validators.required),
      coursePic: new FormControl('', Validators.required),
      coursePdf: new FormControl('', Validators.required),
      courseVideo: new FormControl('', Validators.required)
    })


    this.courseCatService.getAll().subscribe((data: CourseCategory[]) => {
      this.categories = data;
    })
  }

  catSubmit(){
    this.courseCatService.create(this.form.value).subscribe((res:any) => {
      this.router.navigateByUrl('adashboard/acourse');
    })
  }

  submit(){
    this.courseService.create(this.form.value).subscribe((res:any) => {
      this.router.navigateByUrl('adashboard/acourse');
  })
  }

  fileSubmit(){
    this.courseFileService.create(this.file).subscribe((res:any) => {
      this.router.navigateByUrl('adashboard/acourse');
    })
  }

}
