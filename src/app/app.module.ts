import { CarsService } from './cars.service';
import { FormAnimation } from './cars.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarListComponent } from './car-list/car-list.component';
import { FormAddCarComponent } from './form-add-car/form-add-car.component';

import { FormsModule } from '@angular/forms';
import { FormBuyComponent } from './form-buy/form-buy.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    CarListComponent,
    FormAddCarComponent,
    FormBuyComponent,
    HeaderComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [CarsService, FormAnimation],
  bootstrap: [AppComponent]
})
export class AppModule { }
