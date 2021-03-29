import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shopping-bag',
  templateUrl: './shopping-bag.component.html',
  styleUrls: ['./shopping-bag.component.css']
})
export class ShoppingBagComponent implements OnInit {
  aantalProducten: number;

  constructor() {
    this.aantalProducten = 56
   }

  ngOnInit(): void {
  }

}
