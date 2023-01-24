import { Directive, ElementRef, EventEmitter, HostListener, Input, Output } from '@angular/core';

@Directive({
  selector: '[cliquerDirective]'
})
export class CliquerDirective {

  _valeurInterne?: string;

  @Input('cliquerDirective') set valeurInterne(val: string) {
    this._valeurInterne = val;
  }

  get valeurInterne(): string {
    return this._valeurInterne || "NOTHING";
  }

  @Output()
  directiveEmitter: EventEmitter<string> = new EventEmitter();

  @HostListener('click') onClick() {
    this.directiveEmitter.emit(this.valeurInterne);
  }

  constructor(el: ElementRef) { }
}
