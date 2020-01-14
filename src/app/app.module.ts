import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NewCarComponent } from "./new-car/new-car.component";
import { ListCarsComponent } from "./list-cars/list-cars.component";
import { ListCarsDetailComponent } from "./list-cars-detail/list-cars-detail.component";
import { MessagesComponent } from './messages/messages.component';

@NgModule({
  declarations: [
    AppComponent,
    NewCarComponent,
    ListCarsComponent,
    ListCarsDetailComponent,
    MessagesComponent
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
