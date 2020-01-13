import { Component, OnInit } from "@angular/core";

import { Car } from "../car";
import { CarService } from "../car.service";

@Component({
  selector: "app-list-cars",
  templateUrl: "./list-cars.component.html",
  styleUrls: ["./list-cars.component.css"]
})
export class ListCarsComponent implements OnInit {
  selectedCar: Car;
  cars: Car[];

  constructor(private carService: CarService) {}

  ngOnInit() {
    this.getCars();
  }

  onSelect(car: Car): void {
    this.selectedCar = car;
  }

  getCars(): void {
    this.carService.getCars().subscribe(cars => (this.cars = cars));
  }
}
