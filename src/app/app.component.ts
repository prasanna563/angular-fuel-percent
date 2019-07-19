import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
  fuelWidth = 5;

  addFuel(event) {
    console.log(event);
    this.fuelWidth = event.layerX
  }
}
