import { Component } from '@angular/core';
import { defer, Observable, of } from 'rxjs';

@Component({
  selector: 'app-defer',
  templateUrl: './defer.component.html',
  styleUrls: ['./defer.component.scss']
})
export class DeferComponent {
  todayVariable: Observable<number> = of(new Date(Date.now()).getMinutes());
  todayDefer?: Observable<number>;

  souscrire() {
    this.todayVariable.subscribe(e => console.log("todayVariable Minutes = ", e));

    this.todayDefer = defer(() => of(new Date(Date.now()).getMinutes()));
    this.todayDefer.subscribe(e => console.log("todayDefer Minutes = ", e));

    let todayFunction: Observable<number> = of(new Date(Date.now()).getMinutes());
    todayFunction.subscribe(e => console.log("todayFunction Minutes = ", e));
  }
}
