import { CarsService, FormAnimation } from './../cars.service';
import { Component } from '@angular/core';


@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css']
})
export class CarListComponent {

  cars: any[];

  constructor(
    private carsService: CarsService,
    private animationForm: FormAnimation,
  ) {
    this.cars = this.carsService.carList

  }

  toggleSection(car: any[]){
    this.animationForm.toggleForm()
    console.log(car)  
  }

  scrollToTop(){
    window.scrollTo({top:0, behavior: 'smooth'})
  }
 
}
