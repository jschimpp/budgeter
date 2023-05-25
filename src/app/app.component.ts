import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'budgeter';
  housing=0;
  food=0;
  utilities=0;
  transportation=0;
  housingRemaining=0;
  foodRemaining=0;
  utilitiesRemaining=0;
  transportationRemaining=0;
  budgetSet=false;

  constructor() {
    this.housing = 0;
    this.food = 0;
    this.utilities = 0;
    this.transportation = 0;
    this.housingRemaining=0;
    this.foodRemaining=0;
    this.utilitiesRemaining=0;
    this.transportationRemaining=0;
  }

  submit(event: Event) {
    event.preventDefault();
    this.budgetSet=true;
  }

  get renderList(): boolean {
    return this.budgetSet;
  }

  get renderForm(): boolean {
    return !this.budgetSet;
  } 

}
