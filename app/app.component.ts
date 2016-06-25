import {Component} from '@angular/core';

@Component({
  selector: 'calculator',
  styles: [`
    .ca-number-display {
      width: 100%;
    }
    .ca-flex-container {
      display: flex;
      flex-direction: row;
      height: 16.6666667%;
      position: relative;
      margin: 0px;
      padding: 0px;
    }
    .ca-flex-item {
      width: 25%;
      height: 100%;
      margin: 0.5px;
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
      background-color: orange;
    }
    .number {
      background-color: #DCDCDC;
    }
    .padding-bottom-1 {
      margin-bottom: 0.5px;
    }
    .padding-bottom-2 {
      margin-bottom: 0.25px;
    }
  `],
  template: `
  <div>
    <div class="ca-flex-container">
      <input type="text" class="ca-number-display" readonly/>
    </div>
    <div class="ca-flex-container padding-bottom-1">
      <div class="ca-flex-item">
        <div class="ca-button">
          <span class="ca-button-text">AC</span>
        </div>
      </div>
      <div class="ca-flex-item">
        <div class="ca-button">
          <span class="ca-button-text">+/-</span>
        </div>
      </div>
      <div class="ca-flex-item">
        <div class="ca-button">
          <span class="ca-button-text">%</span>
        </div>
      </div>
      <div class="ca-flex-item">
        <div class="ca-button operator">
          <span class="ca-button-text">/</span>
        </div>
      </div>
    </div>
    <div class="ca-flex-container padding-bottom-2">
      <div class="ca-flex-item">
        <div class="ca-button number">
          <span class="ca-button-text">7</span>
        </div>
      </div>
      <div class="ca-flex-item">
        <div class="ca-button number">
          <span class="ca-button-text">8</span>
        </div>
      </div>
      <div class="ca-flex-item">
        <div class="ca-button number">
          <span class="ca-button-text">9</span>
        </div>
      </div>
      <div class="ca-flex-item">
        <div class="ca-button operator">
          <span class="ca-button-text">x</span>
        </div>
      </div>
    </div>
    <div class="ca-flex-container padding-bottom-2">
      <div class="ca-flex-item">
        <div class="ca-button number">
          <span class="ca-button-text">4</span>
        </div>
      </div>
      <div class="ca-flex-item">
        <div class="ca-button number">
          <span class="ca-button-text">5</span>
        </div>
      </div>
      <div class="ca-flex-item">
        <div class="ca-button number">
          <span class="ca-button-text">6</span>
        </div>
      </div>
      <div class="ca-flex-item">
        <div class="ca-button operator">
          <span class="ca-button-text">-</span>
        </div>
      </div>
    </div>
    <div class="ca-flex-container padding-bottom-1">
      <div class="ca-flex-item">
        <div class="ca-button number">
          <span class="ca-button-text">1</span>
        </div>
      </div>
      <div class="ca-flex-item">
        <div class="ca-button number">
          <span class="ca-button-text">2</span>
        </div>
      </div>
      <div class="ca-flex-item">
        <div class="ca-button number">
          <span class="ca-button-text">3</span>
        </div>
      </div>
      <div class="ca-flex-item">
        <div class="ca-button operator">
          <span class="ca-button-text">+</span>
        </div>
      </div>
    </div>
    <div class="ca-flex-container">
      <div class="ca-flex-item">
        <div class="ca-button">
          <span class="ca-button-text">i</span>
        </div>
      </div>
      <div class="ca-flex-item">
        <div class="ca-button number">
          <span class="ca-button-text">0</span>
        </div>
      </div>
      <div class="ca-flex-item">
        <div class="ca-button">
          <span class="ca-button-text">.</span>
        </div>
      </div>
      <div class="ca-flex-item">
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
