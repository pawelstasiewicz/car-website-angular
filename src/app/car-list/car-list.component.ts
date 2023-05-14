import { Car } from './../car';
import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css']
})
export class CarListComponent {
  carList: Car[] = [
    {
      id: 1,
      imgURL:'https://images.pexels.com/photos/909907/pexels-photo-909907.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      brand: 'Audi RS4',
      year: 2019,
      power: '450KM',
      price: '362900 PLN'
    },
    {
      id: 2,
      imgURL:'https://images.pexels.com/photos/892522/pexels-photo-892522.jpeg?auto=compress&cs=tinysrgb&w=1600',
      brand: 'BMW Seria 2',
      year: 2021,
      power: '200KM',
      price: '186900 PLN'
    },
    {
      id: 3,
      imgURL:'https://images.pexels.com/photos/1005633/pexels-photo-1005633.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      brand: 'Renault Megane',
      year: 2017,
      power: '200KM',
      price: '63999 PLN'
    },
    {
      id: 4,
      imgURL:'https://images.pexels.com/photos/10414268/pexels-photo-10414268.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      brand: 'Audi A8',
      year: 2013,
      power: '200KM',
      price: '119000 PLN'
    },
    {
      id: 5,
      imgURL:'https://images.pexels.com/photos/13459032/pexels-photo-13459032.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      brand: 'Renault Scenic',
      year: 2002,
      power: '200KM',
      price: '9900 PLN'
    },
    {
      id: 6,
      imgURL:'https://images.pexels.com/photos/757186/pexels-photo-757186.jpeg?auto=compress&cs=tinysrgb&w=1600',
      brand: 'BMW M3 E30',
      year: 1986,
      power: '200KM',
      price: '250000 PLN'
    }
  ];

  
  formOpen(car: any){
    console.log(car)
  }
}
