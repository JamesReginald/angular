import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-address-card',
  templateUrl: './address-card.component.html',
  styleUrls: ['./address-card.component.css']
})
export class AddressCardComponent implements OnInit {

user: any;

  constructor() {
    this.user = {
      name: 'jim',
      title: 'Software Developer',
      address: '1234 ZX Main st, City, State, 100002',
      phone: ['123-456-789',
                '011-235-813']

    };
  }

  ngOnInit() {
  }

}
