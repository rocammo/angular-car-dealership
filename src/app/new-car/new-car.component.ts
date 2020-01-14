import { Component, OnInit } from "@angular/core";

import { Car } from "../car";
import { CarService } from "../car.service";

@Component({
  selector: "app-new-car",
  templateUrl: "./new-car.component.html",
  styleUrls: ["./new-car.component.css"]
})
export class NewCarComponent implements OnInit {
  showLog: boolean;

  constructor(private carService: CarService) {}

  ngOnInit() {}

  add(brand: string, model: string, year: number): void {
    /* remove whitespace from both sides of a string */
    brand = brand.trim();
    model = model.trim();

    if (!brand || !model || !year) {
      return;
    }

    this.carService.addCar({ brand, model, year } as Car);
  }

  clear(): void {
    let inputs = document.getElementsByTagName("input");
    for (let index = 0; index < inputs.length; index++) {
      inputs[index].value = "";
    }
  }
}
