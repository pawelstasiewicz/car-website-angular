import { CarsService } from './../cars.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css']
})
export class CarListComponent {

  cars: any[];

  constructor(private carsService: CarsService){
    this.cars = this.carsService.carList
  }

  formOpen(car: any[]){
    console.log(car)
  }
 
}
