import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})

export class ListComponent {
  name=""
  amount=0
  expendituresList: {name: String, amount: number}[/*{name: "gym", amount: 10}*/]=[];

  @Input() housing!: number;
  @Input() food!: number;
  @Input() transportation!: number;
  @Input() utilities!: number;
  @Input() housingRemaining!: number;
  @Input() foodRemaining!: number;
  @Input() transportationRemaining!: number;
  @Input() utilitiesRemaining!: number;

  // items=[
  //   {name: "housing", amount: 0, remaining: 0},
  //   {name: "food", amount: 0, remaining: 0},
  //   {name: "utilities", amount: 0, remaining: 0},
  //   {name: "transportation", amount: 0, remaining: 0}
  // ]


  submit(event: Event) {
    event.preventDefault();

    this.expendituresList.push({name: this.name, amount: this.amount});

    if (this.name === "housing") {
      this.housingRemaining-=this.amount
    } else if (this.name === "food") {
      this.foodRemaining-=this.amount
    } else if (this.name === "transportation") {
      this.transportationRemaining-=this.amount
    } else if (this.name === "utilities") {
      this.utilitiesRemaining-=this.amount
    }

    this.name="";
    this.amount=0;
  }
}
