import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/employee.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.scss']
})
export class EmployeeDetailsComponent implements OnInit {

  constructor(private employeeService:EmployeeService) { }
  employees:any[]=[];
  errorMessage:any;

  ngOnInit(): void {
    //this.employees=this.employeeService.getEmployyes();
    this.employeeService.getEmployyes().subscribe(
      employeeData=>{
        this.employees=employeeData;
      },errorMsg=>{
        this.errorMessage=errorMsg;
      })
  }

}
