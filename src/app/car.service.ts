import { Injectable } from "@angular/core";

import { Observable, of } from "rxjs";

import { Car } from "./car";
import { CARS } from "./mock-cars";
import { MessageService } from "./message.service";

@Injectable({
  providedIn: "root"
})
export class CarService {
  constructor(private messageService: MessageService) {}

  getCars(): Observable<Car[]> {
    return of(CARS);
  }

  addCar(car: Car): void {
    if (isNaN(car.year)) {
      this.log(`${car.year}: wrong type for value \`year\`; expected number`);
      return;
    }

    const newCar: Car = { id: this.genId(CARS), ...car };
    CARS.push(newCar);
    this.log(
      `[${newCar.id}] \
      ${newCar.brand} ${newCar.model} (${newCar.year}): \
      successfully added`
    );
  }

  private genId(cars: Car[]): number {
    return cars.length > 0 ? Math.max(...cars.map(car => car.id)) + 1 : 11;
  }

  /** Log a CarService message with the MessageService */
  private log(message: string): void {
    this.messageService.add(`CarService: ${message}`);
  }
}
