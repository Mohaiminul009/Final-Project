import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Course } from '../Model/course.model';
import { CartService } from '../Service/cart.service';
import { CourseService } from '../Service/course.service';
import { StorageService } from '../Service/storage.service';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css']
})
export class CourseDetailsComponent implements OnInit{

  course_id!: number;
  course!: Course;
  isLoggedIn = false;
  roles: string[] = [];

  constructor(public courseService: CourseService,
    private cartService: CartService,
    private storageService: StorageService,
    private router: Router,
    private route: ActivatedRoute){}

  ngOnInit(): void {
    this.course_id = this.route.snapshot.params['uCourseId'];
    this.courseService.getById(this.course_id).subscribe((data: Course)=>{
      this.course = data;
    })

  }

  toPayment(){
    if (this.storageService.isLoggedIn()) {
      this.isLoggedIn = true;
      this.roles = this.storageService.getUser().roles;
      this.router.navigateByUrl('/paymentmethod');
    } else{
      this.router.navigateByUrl('/loginforpay');
    }
  }

  addCart(){
    this.cartService.addtoCart(this.course);
    this.router.navigateByUrl('/cart');
  }

}