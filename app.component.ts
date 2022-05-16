import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { HeaderComponent } from './header/header.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css' ]
})
export class AppComponent implements AfterViewInit{
  ngAfterViewInit(): void {
    this.datafromchild=this.child.dataforusebyViewChildInparent;
  }
  title = 'Angular13Stander';
  name:string="Message from Parent";
  messagefromChild:string="";
  datafromchild:string="";
  @ViewChild(HeaderComponent)child!:HeaderComponent;

}
