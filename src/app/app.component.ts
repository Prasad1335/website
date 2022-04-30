import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  num!: any;



  navFun() {
    this.num = 1;

  }
  navFun2() {
    this.num = 2;
  }
  navFun3() {
    this.num = 3;
  }
  navFun4() {
    this.num = 4;
  }
}
