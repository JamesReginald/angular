import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.css']
})
export class DateComponent implements OnInit {

  dateMessage: string;

  constructor() {

    setInterval( () => {
      let currentDate : Date = new Date();
      this.dateMessage = new Date().toDateString() + ' ' + currentDate.toLocaleTimeString();
    } , 1000);
   }

  ngOnInit() {
  }

}
