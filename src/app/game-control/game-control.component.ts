import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent {
  @Output() intervalFired = new EventEmitter<number>(); //event. Make it listenable from outside, in this case in app-component html
  interval;
  lastNumber = 0;

  onStartGame(){
    this.interval = setInterval(() =>{
      this.intervalFired.emit(this.lastNumber+1);
      this.lastNumber++;
    } ,1000);
  }

  onPauseGame(){
    clearInterval(this.interval); //default JS function. Pauses the interval function
  }

}
