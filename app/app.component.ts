import {Component} from '@angular/core';
import '../styles.css';

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

@Component({
  selector: 'calculator',
  styles: [require('./app.component.css')],
  template: require('./app.component.html')
})
export class AppComponent {
  displayText:string = '';
  BUTTONS = BUTTONS;
  operator:BUTTONS = null;

  onClick(event:any, button:BUTTONS) {
    this.processButton(button);
  }

  processButton(button:BUTTONS) {
    switch(button) {
      case BUTTONS.AC:
        this.displayText = '';
        break;
      case BUTTONS.ZERO:
        this.displayText += '0';
        break;
      case BUTTONS.ONE:
        this.displayText += '1';
        break;
      case BUTTONS.TWO:
        this.displayText += '2';
        break;
      case BUTTONS.THREE:
        this.displayText += '3';
        break;
      case BUTTONS.FOUR:
        this.displayText += '4';
        break;
      case BUTTONS.FIVE:
        this.displayText += '5';
        break;
      case BUTTONS.SIX:
        this.displayText += '6';
        break;
      case BUTTONS.SEVEN:
        this.displayText += '7';
        break;
      case BUTTONS.EIGHT:
        this.displayText += '8';
        break;
      case BUTTONS.NINE:
        this.displayText += '9';
        break;
      case BUTTONS.DIVIDE:
        this.operator = BUTTONS.DIVIDE;
        break;
      case BUTTONS.MULTIPLY:
        this.operator = BUTTONS.MULTIPLY;
        break;
      case BUTTONS.SUBTRACT:
        this.operator = BUTTONS.SUBTRACT;
        break;
      case BUTTONS.ADDITION:
        this.operator = BUTTONS.ADDITION;
        break;
      case BUTTONS.EQUAL:
        this.operator = null;
        break;
      default:
        console.log("THIS LINE SHOULD NEVER HIT");
    }
  }

}
