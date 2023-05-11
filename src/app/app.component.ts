import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  [x: string]: any;
  sauceSelectionnee: string = '';

  onSauceSelectionnee(event: Event) {
    this.sauceSelectionnee = (event.target as HTMLSelectElement).value;
  }

}
