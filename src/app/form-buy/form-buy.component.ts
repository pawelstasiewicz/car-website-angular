import { FormAnimation } from './../cars.service';
import { Component } from '@angular/core';


@Component({
  selector: 'app-form-buy',
  templateUrl: './form-buy.component.html',
  styleUrls: ['./form-buy.component.css']
})
export class FormBuyComponent {
  constructor(private animationForm: FormAnimation) {}

  get carClicked(): boolean{
    return  this.animationForm.carClicked
  }
  
}
