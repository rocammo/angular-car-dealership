import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { ListCarsComponent } from "./list-cars/list-cars.component";
import { NewCarComponent } from "./new-car/new-car.component";

const routes: Routes = [
  { path: "", redirectTo: "list-cars", pathMatch: "full" },
  { path: "list-cars", component: ListCarsComponent },
  { path: "new-car", component: NewCarComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
