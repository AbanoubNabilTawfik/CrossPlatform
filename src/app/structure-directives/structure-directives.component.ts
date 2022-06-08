import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-structure-directives',
  templateUrl: './structure-directives.component.html',
  styleUrls: ['./structure-directives.component.scss']
})
export class StructureDirectivesComponent implements OnInit {

  constructor() { }

  displayName:boolean=false;
  fullName:string="Ahmed Mohamed"
  isLoggedIn:boolean=true;
  carName:string="Tipo";

  cars=["Tipo","KIA","Logan","Sporatge"];

  persons=[
    {"name":"Ahmed","age":25},
    {"name":"Mostafa","age":26},
    {"name":"Omnia","age":30}

  ]

  ngOnInit(): void {
  }

}
