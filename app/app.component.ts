import {Component} from '@angular/core';
import '../styles.css';

@Component({
  selector: 'calculator',
  styles: [require('./app.component.css')],
  template: require('./app.component.html')
})
export class AppComponent {
  displayText:string = '';
  BUTTONS = BUTTONS;

  onClick(event:any, button:BUTTONS) {
    this.displayText = event.target.innerText;
    event.target.setAttribute("style", "opacity:1");
  }

}

enum BUTTONS {
  AC,
  NEGATE,
  PERCENT,
  DIVIDE,
  SEVEN,
  EIGHT,
  NINE,
  MULTIPLY,
  FOUR,
  FIVE,
  SIX,
  SUBTRACT,
  ONE,
  TWO,
  THREE,
  ADDITION,
  SETTINGS,
  ZERO,
  PERIOD,
  EQUAL
}
