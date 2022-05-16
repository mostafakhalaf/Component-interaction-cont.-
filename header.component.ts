import { Component, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormsModule, ReactiveFormsModule, Validators } from '@angular/forms'; // <== add the imports!
import { FormBuilder } from '@angular/forms';
import {Input,EventEmitter} from '@angular/core';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent  {
iserror:boolean=true;
increas:any=1;
mos="";
@Input() public parentData:any;
@Output()public childEvent=new EventEmitter();
FireEvent()
{
this.childEvent.emit("Hi message from Child");
}
dataforusebyViewChildInparent:string="data for use by ViewChild Inparent";
constructor() {
 }

}
