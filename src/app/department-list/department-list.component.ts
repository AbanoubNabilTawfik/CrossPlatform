import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.scss']
})
export class DepartmentListComponent implements OnInit {

  constructor(private router:Router,private activatedRoute:ActivatedRoute) { }

  departments=[
    {"name":"Angular","id":1},
    {"name":"React","id":2},
    {"name":"JavaScript","id":3},
    {"name":"ES6","id":4}
  ]
selectedId:any;
  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params:ParamMap)=>
    {
      this.selectedId=params.get('id');
    })
  }
  gotToDepartmentDetails(deptId:any)
  {
     this.router.navigate(["/department",deptId])
  }
}
