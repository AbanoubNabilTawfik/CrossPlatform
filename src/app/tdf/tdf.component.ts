import { Component, OnInit } from '@angular/core';
import { EnrollService } from '../enroll.service';
import { User } from '../User';

@Component({
  selector: 'app-tdf',
  templateUrl: './tdf.component.html',
  styleUrls: ['./tdf.component.scss']
})
export class TdfComponent implements OnInit {

  constructor(private enrollService:EnrollService) { }

  topics=["Angular","React","JavaScript"];
  userModel:User=new User('','','abnabil@iti.gov.eg','Angular',true);

  ngOnInit(): void {
  }

  onSubmit()
  {
    console.log(this.userModel)
    this.enrollService.enroll(this.userModel).subscribe(data=>{
      console.log("Success",data)
    },
    error=>{
      console.log(error)
    });
  }

}
