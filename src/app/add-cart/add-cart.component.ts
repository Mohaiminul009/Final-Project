import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Course } from '../Model/course.model';
import { CourseService } from '../Service/course.service';

@Component({
  selector: 'app-add-cart',
  templateUrl: './add-cart.component.html',
  styleUrls: ['./add-cart.component.css']
})
export class AddCartComponent implements OnInit{

  course_id!: number;
  course!: Course;

  courseCname!: string;
  courseCduration!: string;
  courseCarticle!: string;
  courseCresource!: string;
  courseCaccess!: string;
  courseCinstructorName!: string;
  courseCprice!: string;
  courseCuploadDate!: string;
  
constructor(public courseService: CourseService,
  private router: Router,
  private route: ActivatedRoute){}

  ngOnInit(): void {
    this.course_id = this.route.snapshot.params['cartCourseId'];
    this.courseService.getById(this.course_id).subscribe((data: Course)=>{
      this.course = data;
    });
  }

}
