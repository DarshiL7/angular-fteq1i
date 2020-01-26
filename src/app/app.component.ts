import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
 ngOnInit(){
   firstName:''
   lastName:''
   email:''
   password:''
   mobileNo:''
   day:''
   month:''
   year:''
   gender:''


 }
 dataPass(){
   console.log();
 } 
}
