import { Component, OnInit } from '@angular/core';
import { Course } from '../Model/course.model';
import { Instructor } from '../Model/instructor.model';
import { CourseService } from '../Service/course.service';
import { InstructorService } from '../Service/instructor.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit{

  courses: Course[] = [];

  constructor(public courseService: CourseService,
    public instructorService: InstructorService){}

  ngOnInit(): void {
    this.courseService.getAll().subscribe((data: Course[]) => {
      this.courses = data;
    })
  }

}
