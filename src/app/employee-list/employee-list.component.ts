import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {

  constructor(private employeeService:EmployeeService) { }

  employees:any[]=[];
  errorMessage:any;

  ngOnInit(): void {
   // this.employees=this.employeeService.getEmployyes();
   this.employeeService.getEmployyes().subscribe(
     data=>{
      this.employees=data;
   },error=>{
        this.errorMessage=error
   })
  }

}
