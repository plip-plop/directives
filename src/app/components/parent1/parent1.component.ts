import { AfterViewInit, Component, NgZone, QueryList, ViewChildren } from '@angular/core';
import { defer, merge, Observable, startWith, switchMap, take } from 'rxjs';
import { Enfant1Component } from '../enfant1/enfant1.component';
import { CliquerDirective } from '../../directives/cliquer.directive';


@Component({
  selector: 'app-parent1',
  templateUrl: './parent1.component.html',
  styleUrls: ['./parent1.component.scss']
})
export class Parent1Component implements AfterViewInit {
  public texte?: string;


  @ViewChildren("view1Directive")
  // @ViewChildren(Enfant1Component)
  childComps1!: QueryList<Enfant1Component>;

  // @ViewChildren("view2Directive")
  @ViewChildren(CliquerDirective)
  childComp2!: QueryList<CliquerDirective>;

  /**
   * Ecoute de la directive portée par le composant enfant.
   * - "@ViewChildren()" doit porter sur la directive "CliquerDirective", et non sur le composant enfant "app-enfant2".
   * - MERGE: Transforme un array en flux -> On passe de "CliquerDirective[]" en un flux unique de données.
   * - DEFER: Factory d'observables (https://www.learnrxjs.io/learn-rxjs/operators/creation/defer).
   * - "_ngZone.onStable": Si le composant n'a pas encore été initialisé, on relance l'initialisation de
   * "changementsEnfants" ("defer(() => ...") lorsque la zone est stable.
   * Angular Material: "select"
   * https://github.com/angular/components/blob/main/src/material/select/select.ts
   * Article
   * https://netbasal.com/getting-to-know-the-defer-observable-in-rxjs-a16f092d8c09
   * const randNum = of(Math.random());
   * randNum.subscribe(console.log);
   * randNum.subscribe(console.log);
   * In this example, each subscriber will get the same random value. We can solve this by using defer, so that the expression
   * will be evaluated only when someone subscribed to the source, and not beforehand.
   */
  readonly changementsEnfants: Observable<string> = defer(() => {
    const childComp2 = this.childComp2;

    if (childComp2) {
      return childComp2.changes.pipe(
        startWith(childComp2),
        switchMap(() => merge(...childComp2.map(childComp2 => childComp2.directiveEmitter))),
      );
    }

    return this._ngZone.onStable.pipe(
      take(1),
      switchMap(() => this.changementsEnfants),
    );
  });

  constructor(private _ngZone: NgZone) { }

  ngAfterViewInit(): void {
    // https://github.com/angular/components/blob/main/src/material/select/select.ts
    this.changementsEnfants.subscribe({
      next: success => console.log("Subscribe (ngAfterViewInit) = ", success)
    });
  }

  appelerEnfants() {
    this.texte = this.childComps1.map(child => child.texte).join(", ");
  }

}
