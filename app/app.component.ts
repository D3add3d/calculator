import {Component} from '@angular/core';

@Component({
  selector: 'calculator',
  styles: [`
    .ca-border {
      border-style: groove;
    }
    .ca-font {

    }
    #ca-number-display {
      width: 100%;
    }
    button {
      width: 25%;
      font-size: large;
    }
    button.operator {
      background-color: orange;
    }
    .ca-flex-container {
      display: flex;
      flex-direction: row;
      height: 16.6666667%;

    }
  `],
  template: `
  <div>
    <div class="ca-flex-container">
      <input type="text" id="ca-number-display" readonly/>
    </div>
    <div class="ca-flex-container">
      <button>AC</button>
      <button>+/-</button>
      <button>%</button>
      <button class="operator">/</button>
    </div>
    <div class="ca-flex-container">
      <button>7</button>
      <button>8</button>
      <button>9</button>
      <button class="operator">*</button>
    </div>
    <div class="ca-flex-container">
      <button>4</button>
      <button>5</button>
      <button>6</button>
      <button class="operator">-</button>
    </div>
    <div class="ca-flex-container">
      <button>1</button>
      <button>2</button>
      <button>3</button>
      <button class="operator">+</button>
    </div>
    <div class="ca-flex-container">
      <button>i</button>
      <button>0</button>
      <button>.</button>
      <button class="operator">=</button>
    </div>
  </div>
  `
})
export class AppComponent {
}
