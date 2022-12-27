import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-odd',
  templateUrl: './odd.component.html',
  styleUrls: ['./odd.component.css']
})
export class OddComponent {
  @Input() number: number; //the value for this field will come from property binding '[number]="currentOddNumber"' used in app.component.html

}
