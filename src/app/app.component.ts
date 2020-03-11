import { Component } from '@angular/core';
import { User } from './address-card/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
user: User;

  constructor(){
    this.user = new User();
    this.user.name = 'Jimmie van Vliet';
    this.user.address = 'Amsterdam, the Netherlands';
    this.user.designation = 'Full stack developer';
    this.user.phone = ['06-23 33 61 84',
  '0297-284 983'];
  }

}
