import { Component } from '@angular/core';
import { getCurrencySymbol } from '@angular/common';

@Component({
  selector: 'app-root',
  template: `
  <h2 [style.color]="'orange'">hello</h2>
  <h2 [style.color]="!hasError?'red':'blue'">hello</h2>
  <h2 [style.color]="highlight" >hello</h2>
  <h2 [ngStyle]="styl" >stylebinding</h2>
   
  <h1>two way binding</h1>
  <input [(ngModel)]="name" type="text">{{name}}
  
  
  <h2 *ngIf="a">valid</h2>

  `,
  styles: [`.text-succes
  {
    color:blue;
  }
  .text-danger{
    color:red;
}
.text-special
{
  font-style:bold;
}


<br><br>
    `]
})
export class AppComponent {
  
a=true;
 name="";
 successclass="text-danger";
 highlight="yellow";
 hasError=false;
  styl=
 {
   color:"purple",
   fontStyle:"italic",
   fontSize: "40px",
   textAlign:"center",
   fontType:"calibri"

   
 
 }

}

