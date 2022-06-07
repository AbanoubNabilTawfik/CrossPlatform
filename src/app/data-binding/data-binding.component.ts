import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.scss']
})
export class DataBindingComponent implements OnInit {

  fullName:string="Ahmed Mohamed";
  url:string=window.location.href;
  txtId:string="myIdTwo"
  isDisabled=false;
  textColor="text-success"
  hasError:boolean=false;
  isSpecial:boolean=true;

  messageClasses={
    "text-success":!this.hasError,
    "text-danger":this.hasError,
    "text-special":this.isSpecial

  }

  myStlye={
    color:"gray",
    fontStyle:"italic"
  }

  styleColor:string="red"
  constructor() { }

  ngOnInit(): void {
  }

}
