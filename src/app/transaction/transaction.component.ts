import { Component, OnInit } from '@angular/core';
import { PurchaseCourse } from '../Model/purchase-course.model';
import { PurchaseCourseService } from '../Service/purchase-course.service';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit{

  purchaseCourses: PurchaseCourse[] = [];

  constructor(private purchaseCourseService: PurchaseCourseService){}

  ngOnInit(): void {
    this.purchaseCourseService.getAll().subscribe((data: PurchaseCourse[]) => {
      this.purchaseCourses = data;
    })
  }

  clickon(){
    
  }

}
