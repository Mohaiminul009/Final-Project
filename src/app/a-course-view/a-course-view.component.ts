import { Component, OnInit } from '@angular/core';
import { CourseCategory } from '../Model/coursecategory.model';
import { CourseCategoryService } from '../Service/course-category.service';

@Component({
  selector: 'app-a-course-view',
  templateUrl: './a-course-view.component.html',
  styleUrls: ['./a-course-view.component.css']
})
export class ACourseViewComponent implements OnInit{

  categories: CourseCategory[] = [];

  constructor(public courseCategoryService: CourseCategoryService) { }
  
  ngOnInit(): void {
    this.courseCategoryService.getAll().subscribe((data: CourseCategory[]) => {
    
      this.categories = data;
      console.log('All Data',this.categories);
    })
  }

}
