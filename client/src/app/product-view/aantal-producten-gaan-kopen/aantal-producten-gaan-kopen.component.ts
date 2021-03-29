import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aantal-producten-gaan-kopen',
  templateUrl: './aantal-producten-gaan-kopen.component.html',
  styleUrls: ['./aantal-producten-gaan-kopen.component.css']
})
export class AantalProductenGaanKopenComponent implements OnInit {
 aantal: number;

  constructor() { 
    this.aantal = 2222222
  }

  ngOnInit(): void {
  }

}
