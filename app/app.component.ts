import {Component} from '@angular/core';

@Component({
  selector: 'calculator',
  template: `
    <h1>Hello {{world}}</h1>
  `
})
export class AppComponent {
  world:string = "World";
  constructor() {
    this.world = "World4";
  }
}
