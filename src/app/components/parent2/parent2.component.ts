import { Component } from '@angular/core';

@Component({
  selector: 'app-parent2',
  templateUrl: './parent2.component.html',
  styleUrls: ['./parent2.component.scss']
})
export class Parent2Component {
  // https://stackoverflow.com/questions/71590508/how-to-change-a-variables-value-inside-a-specific-child-component-rendered-with
  selectedElt: any;
  items = [
    { name: 'foo' },
    { name: 'bar' },
    { name: 'kix' },
  ];
}
