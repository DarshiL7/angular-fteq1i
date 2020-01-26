import { Component, Input } from '@angular/core';

@Component({
  selector: 'hello',
  template: `<h1>Hello {{name}}!</h1>`,
  styles: [`h1 { font-family: Lato; }`]
})
export class HelloComponent  {
  //@Input() name: string;
  firstName:string ;
  lastName:string;
  email:string;
  password:string;
  mobileNo:number;
  day:number;
  month:number;
  year:number;
  gender:string;
}
