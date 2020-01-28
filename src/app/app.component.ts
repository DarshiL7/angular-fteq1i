import { Component,OnInit } from '@angular/core';
//import {User} from './user.model.ts';
import { FormBuilder,FormGroup,Validators ,FormArray} from "@angular/forms"

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit  {
 // user:User=new User();
  userFormGroup:FormGroup;

  constructor(private formBuilder:FormBuilder){
      
  }
 ngOnInit(){
   this.userFormGroup=this.formBuilder.group({

    firstName:['',Validators.required],
    lastName:['',Validators.required],
    email:['',Validators.required],
    password:['',Validators.required,length],
    mobileNo:['',Validators.required,length],
    day:['',Validators.required],
    month:['',Validators.required],
    year:['',Validators.required],
    gender:['',Validators.required],
    address:this.formBuilder.group({
    street:[''],
    area:[''],
    city:['']}),
    hobbies:this.formBuilder.array([])
    
   })
   this.userFormGroup.controls.firstName.setValue("Darshil");
   


 }

addArray(){
    const hobbieArray = this.userFormGroup.controls.hobbies as FormArray;
    hobbieArray.push(this.formBuilder.group({
      hobbyName:'',
    }));
    //console.log("hobbieArray");
}









 dataPass(){
  
   console.log(this.userFormGroup.value);
   this.userFormGroup.controls.firstName.patchValue("Kansara");
   
     console.log(this.userFormGroup.controls.hobbies.value);
  
   
   
  //  if(this.userFormGroup.value. firstName==""){
  //     this.err_firstName={'border-color':'red'}
      
  //  }else{
  //    this.err_firstName={'border-color':''}
  //  }
  //  if(this.userFormGroup.value. lastName==""){
  //     this.err_lastName={'border-color':'red'}
      
  //  }else{
  //    this.err_lastName={'border-color':''}
  //  }
  //  if(this.userFormGroup.value.email==""){
  //     this.err_email={'border-color':'red'}
      
  //  }else{
  //    this.err_email={'border-color':''}
  //  }
  //  if(this.userFormGroup.value.password==""){
  //     this.err_password={'border-color':'red'}
      
  //  }else{
  //    this.err_password={'border-color':''}
  //  }
  //  if(this.userFormGroup.value.mobileNo==""){
  //     this.err_mobileNo={'border-color':'red'}
      
  //  }else{
  //    this.err_mobileNo={'border-color':''}
  //  }
  //  if(this.userFormGroup.value.month==""){
  //     this.err_month={'border-color':'red'}
      
  //  }else{
  //    this.err_month={'border-color':''}
  //  }
  //  if(this.userFormGroup.value.day==""){
  //     this.err_day={'border-color':'red'}
      
  //  }else{
  //    this.err_day={'border-color':''}
  //  }
  //  if(this.userFormGroup.value.year==""){
  //     this.err_year={'border-color':'red'}
      
  //  }else{
  //    this.err_year={'border-color':''}
  //  }
  //  if(this.userFormGroup.value.gender==""){
  //     this.err_gender={'border-color':'red'}
      
  //  }else{
  //    this.err_gender={'border-color':''}
  //  }
  //  if(this.userFormGroup.value.password.length<8){
  //    alert("Enetr password lenghth of more than 8 characters");
  //  }
  //  if(this.userFormGroup.value.mobileNo.length>10||this.userFormGroup.value.mobileNo.length<10){
  //    alert("Enetr mobile number of 10 characters");
  //  }



 } 
}
