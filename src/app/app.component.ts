import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name: string = '';

  date:string = '';
  amount: number = 0;
  height: number = 0;

  miles : number = 0;

  Human = { // can be displayed : {{Human | json}}, in the template
    Str: 10,
    Int: 10,
    HP: 100,
    Agil : 10,
    Tech: 10
  }

  onNameChange(val: string){
    this.name = val;
  }

  onDateChange(val:string){
    this.date  = val;
  }

  onAmountChange(val: string){
    this.amount = parseFloat( val);
  }
  onHeightChange(val: string){
    this.height = parseFloat( val);
  }

  onMilesChange(val:string){
    this.miles = parseFloat(val);
  }
}
