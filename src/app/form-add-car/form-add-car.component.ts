import { Component } from '@angular/core';
import { Car } from '../car'; 

@Component({
  selector: 'app-form-add-car',
  templateUrl: './form-add-car.component.html',
  styleUrls: ['./form-add-car.component.css']
})
export class FormAddCarComponent {
  newCar: Car ={ id: 0, imgURL:'', brand:'', year: 0, power:'', price: ''}

  addCar(){
    this.newCar = { id: 0, imgURL:'', brand:'', year: 0, power:'', price: ''}
  }
}
