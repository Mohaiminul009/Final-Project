import { Component, OnInit } from '@angular/core';
import { Applicant } from '../Model/applicant.model';
import { InstructorFormService } from '../Service/instructor-form.service';

@Component({
  selector: 'app-a-dashboard',
  templateUrl: './a-dashboard.component.html',
  styleUrls: ['./a-dashboard.component.css']
})
export class ADashboardComponent implements OnInit{

  applicant: Applicant[] = [];

  countData!: string;
  constructor(public instructorFormService: InstructorFormService) { }

  ngOnInit(): void {
    this.instructorFormService.countAll().subscribe((data) => {
      this.countData = data;
      console.log(this.countData)
    })
  }

}
