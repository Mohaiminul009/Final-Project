import { Component, OnInit } from '@angular/core';
import { CourseCategory } from '../Model/coursecategory.model';
import { CourseCategoryService } from '../Service/course-category.service';
import Swal from 'sweetalert2';

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
    })
  }

  delete(id:number){
    this.courseCategoryService.delete(id).subscribe(res => {
         this.categories = this.categories.filter(item => item.course_cat_id !== id);
    })
  }
  alertConfirmation(id:number){
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      }
    })
  }

}
