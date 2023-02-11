import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Course } from '../Model/course.model';
import { CourseService } from '../Service/course.service';
import { PurchaseCourseService } from '../Service/purchase-course.service';

@Component({
  selector: 'app-payment-method',
  templateUrl: './payment-method.component.html',
  styleUrls: ['./payment-method.component.css']
})
export class PaymentMethodComponent implements OnInit{

  constructor(private purchaseCourseService: PurchaseCourseService,
     private courseService: CourseService,
      public route: ActivatedRoute,
       public router: Router){
    setInterval(() => {this.today = Date.now()}, 1);
  }

  today: number = Date.now();
  btn1:boolean = false;
  btn2:boolean = true;
  course!:Course;
  course_id!: number; 
  form!: FormGroup

  ngOnInit(): void {
    this.course_id = this.route.snapshot.params['purchaseCourseId'];
    this.courseService.getById(this.course_id).subscribe((data: Course)=>{
      this.course = data;
    })

    this.form = new FormGroup({
      purchase_course_id: new FormControl(this.course.course_id, [Validators.required]),
      purchaseCourseName: new FormControl(this.course.courseName, [Validators.required]),
      purchaseCoursePrice: new FormControl( this.course.coursePrice, [Validators.required]),

      purchseCourseCountry: new FormControl('', [Validators.required]),
      purchseCourseAccountType: new FormControl('', [Validators.required]),
      purchseCourseUserName: new FormControl('', [Validators.required]),
      purchseCourseAccountNo: new FormControl('', [Validators.required]),
      purchseCoursePayment: new FormControl('', [Validators.required]),
      purchseCourseTime: new FormControl('', [Validators.required])
    })
  }

  submit(){
    console.log(this.form.value);
    this.purchaseCourseService.create(this.form.value).subscribe((res:any) => {
      alert("Purchase Complete!")
    })
  }

  btn1Function(){
    this.btn1 = true;
    this.btn2 = false;
  }

  btn2Function(){
    this.btn1 = false;
    this.btn2 = true;
  }
}
