import {Component} from '@angular/core';

@Component({
  selector: 'calculator',
  styles: [`
    .ca-number-display-container {
      display: table;
      width: 100%;
      height: 20%;
      margin: 0px;
      padding: 0px;
    }
    .ca-number-display-text {
      display: table-cell;
      vertical-align: middle;
      position: relative;
      float: right;
      margin: auto;
      text-align: center;
    }
    .ca-numberpad-container {
      display: table;
      width: 100%;
      height: 80%;
      table-layout: fixed;
      border: 1px; solid;
    }
    .ca-number-display {
      width: 100%;
    }
    .ca-row-container {
      display: table-row;
      margin: 0px;
      padding: 1px;
    }
    .ca-item-container {
      display: table-cell;
      border: 1px solid #A9A9A9;
    }
    .ca-button {
      display: table;
      text-align: center;
      background-color: gray;
      width: 100%;
      height: 100%;
    }
    .ca-button-text {
      display: table-cell;
      font-size: x-large;
      vertical-align: middle;
    }
    .operator {
      background-color: #FF9933;
      color: white;
    }
    .number {
      background-color: #DCDCDC;
      color: black;
    }
    .unary-operator {
      background-color: #D9D9D9;
    }
  `],
  template: `
    <div class="ca-number-display-container">
      <span class="ca-number-display-text">AC</span>
    </div>
    <div class="ca-numberpad-container">
      <div class="ca-row-container">
        <div class="ca-item-container">
          <div class="ca-button unary-operator">
            <span class="ca-button-text">AC</span>
          </div>
        </div>
        <div class="ca-item-container">
          <div class="ca-button unary-operator">
            <span class="ca-button-text">+/-</span>
          </div>
        </div>
        <div class="ca-item-container">
          <div class="ca-button unary-operator">
            <span class="ca-button-text">%</span>
          </div>
        </div>
        <div class="ca-item-container">
          <div class="ca-button operator">
            <span class="ca-button-text">/</span>
          </div>
        </div>
      </div>
      <div class="ca-row-container">
        <div class="ca-item-container">
          <div class="ca-button number">
            <span class="ca-button-text">7</span>
          </div>
        </div>
        <div class="ca-item-container">
          <div class="ca-button number">
            <span class="ca-button-text">8</span>
          </div>
        </div>
        <div class="ca-item-container">
          <div class="ca-button number">
            <span class="ca-button-text">9</span>
          </div>
        </div>
        <div class="ca-item-container">
          <div class="ca-button operator">
            <span class="ca-button-text">x</span>
          </div>
        </div>
      </div>
      <div class="ca-row-container">
        <div class="ca-item-container">
          <div class="ca-button number">
            <span class="ca-button-text">4</span>
          </div>
        </div>
        <div class="ca-item-container">
          <div class="ca-button number">
            <span class="ca-button-text">5</span>
          </div>
        </div>
        <div class="ca-item-container">
          <div class="ca-button number">
            <span class="ca-button-text">6</span>
          </div>
        </div>
        <div class="ca-item-container">
          <div class="ca-button operator">
            <span class="ca-button-text">-</span>
          </div>
        </div>
      </div>
      <div class="ca-row-container">
        <div class="ca-item-container">
          <div class="ca-button number">
            <span class="ca-button-text">1</span>
          </div>
        </div>
        <div class="ca-item-container">
          <div class="ca-button number">
            <span class="ca-button-text">2</span>
          </div>
        </div>
        <div class="ca-item-container">
          <div class="ca-button number">
            <span class="ca-button-text">3</span>
          </div>
        </div>
        <div class="ca-item-container">
          <div class="ca-button operator">
            <span class="ca-button-text">+</span>
          </div>
        </div>
      </div>
      <div class="ca-row-container">
        <div class="ca-item-container">
          <div class="ca-button unary-operator">
            <span class="ca-button-text">i</span>
          </div>
        </div>
        <div class="ca-item-container">
          <div class="ca-button number">
            <span class="ca-button-text">0</span>
          </div>
        </div>
        <div class="ca-item-container">
          <div class="ca-button unary-operator">
            <span class="ca-button-text">.</span>
          </div>
        </div>
        <div class="ca-item-container">
          <div class="ca-button operator">
            <span class="ca-button-text">=</span>
          </div>
        </div>
      </div>
    </div>
  `
})
export class AppComponent {
}
