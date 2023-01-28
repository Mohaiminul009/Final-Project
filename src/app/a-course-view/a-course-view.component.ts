import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CourseCategory } from '../Model/coursecategory.model';
import { CourseCategoryService } from '../Service/course-category.service';

@Component({
  selector: 'app-a-course-view',
  templateUrl: './a-course-view.component.html',
  styleUrls: ['./a-course-view.component.css']
})
export class ACourseViewComponent implements OnInit{

  categories: CourseCategory[] = [];

  constructor(public courseCategoryService: CourseCategoryService,
    private router: Router) { }
  
  ngOnInit(): void {
    this.courseCategoryService.getAll().subscribe((data: CourseCategory[]) => {
      this.categories = data;
    })
  }

  delete(id:number){
    this.courseCategoryService.delete(id).subscribe(res => {
         this.categories = this.categories.filter(item => item.course_cat_id !== id);
         this.router.navigateByUrl('adashboard/acourseview');
    })
  }

}
