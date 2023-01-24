import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appMyDirective]',
})
export class MyDirectiveDirective {
  // (Sucre syntaxique) Si l'input porte la même valeur que le sélecteur de directive:
  // Le sélecteur de directive est optionnel sur l'élément (seul l'input est nécessaire).
  @Input('appMyDirective') set setValeur(value: string) {
    if (!!value) {
      this.background = value;
    } else {
      this.background = 'purple';
    }
  }

  _background?: string;

  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

  // Getter/setter: Doivent porter un nom différent de la variable qu'il modifie (d'où le préfixe "_")
  get background(): string | undefined {
    return this._background;
  }

  set background(background: string | undefined) {
    this._background = background;
    this.doSomehing();
  }

  doSomehing() {
    if (this.background) {
      // Ajouter une bordure/background
      this.renderer.setStyle(this.elRef.nativeElement, 'border', `2px dashed ${this.background}`);
      this.renderer.setStyle(this.elRef.nativeElement, 'background', this.background);

      // Set the value of an input field
      this.renderer.setProperty(this.elRef.nativeElement, 'value', 'My value');

      // Add/remove class
      this.renderer.addClass(this.elRef.nativeElement, "my-class-on");
      this.renderer.removeClass(this.elRef.nativeElement, "my-class-off");

    } else {
      console.log('No style, no rendering');
    }
  }
}
