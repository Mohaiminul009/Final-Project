import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Cart } from '../Model/cart.model';
import { Course } from '../Model/course.model';
import { CartService } from '../Service/cart.service';
import { CourseService } from '../Service/course.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{

  course_id!: number;
  course!: Course;
  courses: Course[] = [];
  cart!:Cart;
  form!:FormGroup;

  constructor(public courseService: CourseService,
    public cartService: CartService,
    private router: Router,
    private route: ActivatedRoute){}
    
  ngOnInit(): void {
    this.course_id = this.route.snapshot.params['cartCourseId'];
    this.courseService.getById(this.course_id).subscribe((data: Course)=>{
      this.course = data;
    });

    

    // this.addForm = this.formBuilder.group({
    //     id : '',
    //     courseCname : this.course.courseName,
    //     courseCduration : this.course.courseDuration,
    //     courseCarticle : this.course.courseArticle,
    //     courseCresource : this.course.courseResource,
    //     courseCaccess : this.course.courseAccess,
    //     courseCinstructorName : this.course.instructorName2,
    //     courseCprice : this.course.coursePrice,
    //     courseCuploadDate : this.course.courseUploadDate
    //   });

    //   this.cartService.createCart(this.addForm.value).subscribe(data => {
    //     this.ngOnInit();
    //   });
    //   console.log(this.addForm.value);
  }

  delete(id:number){
    this.cartService.delete(id).subscribe(res => {
         this.courses = this.courses.filter(item => item.course_id !== id);
    })
  };

  

}
