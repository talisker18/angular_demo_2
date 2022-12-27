import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-even',
  templateUrl: './even.component.html',
  styleUrls: ['./even.component.css']
})
export class EvenComponent {
  @Input() number: number; //the value for this field will come from property binding '[number]="currentEvenNumber"' used in app.component.html
}
