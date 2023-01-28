import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CourseCategory } from '../Model/coursecategory.model';
import { CourseCategoryService } from '../Service/course-category.service';

@Component({
  selector: 'app-a-course',
  templateUrl: './a-course.component.html',
  styleUrls: ['./a-course.component.css']
})
export class ACourseComponent implements OnInit{

  form!: FormGroup;
  categories: CourseCategory[] = [];
  constructor(
    public courseCatService: CourseCategoryService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      courseCatName: new FormControl('', Validators.required)
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
