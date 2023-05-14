import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarListComponent } from './car-list/car-list.component';
import { FormAddCarComponent } from './form-add-car/form-add-car.component';

import { FormsModule } from '@angular/forms';
import { FormBuyComponent } from './form-buy/form-buy.component';

@NgModule({
  declarations: [
    AppComponent,
    CarListComponent,
    FormAddCarComponent,
    FormBuyComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
