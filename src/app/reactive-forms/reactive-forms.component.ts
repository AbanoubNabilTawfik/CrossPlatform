import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.scss']
})
export class ReactiveFormsComponent implements OnInit {

  constructor(private fb:FormBuilder) { }

  // registerationForm=new FormGroup({
  //     userName:new FormControl(''),
  //     password:new FormControl(''),
  //     confirmPassword:new FormControl(''),
  //     address:new FormGroup({
  //        city:new FormControl(''),
  //        state:new FormControl(''),
  //        postalCode:new FormControl('')
  //     })
  // })
  registerationForm=this.fb.group({
    userName:[''],
    password:[''],
    confirmPassword:[''],
    address:this.fb.group({
       city:[''],
       state:[''],
       postalCode:['']
    })
})

  ngOnInit(): void {
  }

  loadData()
  {
    // this.registerationForm.setValue({
    //   userName:'ITI',
    //   password:'12345',
    //   confirmPassword:'12345',
    //   address:{
    //     city:'Assiut',
    //     state:'Egypt',
    //     postalCode:'71111'
    //   }

    // })

    this.registerationForm.patchValue({
      userName:'ITI',
      address:{
        city:'Assiut',
        state:'Egypt',
        postalCode:'71111'
      }

    })
  }

}
