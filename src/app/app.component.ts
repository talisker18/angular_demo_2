import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular_demo_2';
  oddNumbers: number[] = [];
  evenNumbers: number[] = [];

  onIntervalFired(firedNumber: number){ //this method is executed when 'intervalFired' event occurs. The app-component listen to this event in 'app.component.html' using '(intervalFired)'
    console.log(firedNumber);

    if(firedNumber % 2 === 0){
      this.evenNumbers.push(firedNumber);
    }else{
      this.oddNumbers.push(firedNumber);
    }
  }
}
