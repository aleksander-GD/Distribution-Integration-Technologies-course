import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css']
})
export class CarListComponent implements OnInit {

  public carArray =
    [{ producer: "Renault", model: "Clio" },
    { producer: "Renault", model: "Twingo" },
    { producer: "Citroen", model: "C3" }];

  constructor() {
  }

  ngOnInit(): void {

  }

}
