import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Course } from '../Model/course.model';
import { CourseService } from '../Service/course.service';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css']
})
export class CourseDetailsComponent implements OnInit{

  course_id!: number;
  course!: Course;

  constructor(public courseService: CourseService,
    private route: ActivatedRoute){}

  ngOnInit(): void {
    this.course_id = this.route.snapshot.params['uCourseId'];
    this.courseService.getById(this.course_id).subscribe((data: Course)=>{
      this.course = data;
    });

    // this.courseService.getAll().subscribe((data: Course[]) => {
    //   this.courses = data;
    // })
  }

}
