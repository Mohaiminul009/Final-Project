import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CourseCategory } from '../Model/coursecategory.model';
import { Instructor } from '../Model/instructor.model';
import { CourseCategoryService } from '../Service/course-category.service';
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

  constructor(
    public courseCatService: CourseCategoryService,
    public instructorService: InstructorService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      courseCatName: new FormControl('', Validators.required),

      courseName: new FormControl('', Validators.required),
      courseUploadDate: new FormControl('', Validators.required),
      courseDuration: new FormControl('', Validators.required),
      courseArticle: new FormControl('', Validators.required),
      courseResource: new FormControl('', Validators.required),
      courseAccess: new FormControl('', Validators.required),
      courseDescription: new FormControl('', Validators.required),
      courseCurriculum: new FormControl('', Validators.required),
      instructorName: new FormControl('', Validators.required),
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

}
