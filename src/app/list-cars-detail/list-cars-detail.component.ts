import { Component, OnInit, Input } from "@angular/core";

import { Car } from "../car";

@Component({
  selector: "app-list-cars-detail",
  templateUrl: "./list-cars-detail.component.html",
  styleUrls: ["./list-cars-detail.component.css"]
})
export class ListCarsDetailComponent implements OnInit {
  @Input() car: Car;

  constructor() {}

  ngOnInit() {}
}
