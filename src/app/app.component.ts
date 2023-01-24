import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'directiveP';
  background = '';

  setBackground(value: string) {
    this.background = value;
  }
}
