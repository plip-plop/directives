# Directives
https://angular.io/guide/attribute-directives
Les **directives**...
- Les *directives* permettent d'ajouter des éléments HTML et/ou de modifier leurs attributs. Ex: rendre une "div" cliquable, etc.
```
@HostListener('mouseenter') onMouseEnter() {
  this.turnBackgroundTo('yellow');
}

@HostListener('keydown') newColor() {
  possibleColors = ['red', 'pink', 'yellow'];
  const colorPick = Math.floor(Math.random() * this.possibleColors.length);
  this.color = this.borderColor = this.possibleColors[colorPick];
}
```

- Les *directives* permettent de valoriser certains éléments. 
```
@HostBinding('value') myValue; // is exactly the same as [value]="myValue"
@HostBinding('style.color') color!: string;
@HostBinding('style.border-color') borderColor!: string;
```

- Sucre syntaxique: Si l'input porte la même valeur que le sélecteur de directive, le sélecteur de directive devient optionnel sur l'élément (seul l'input est nécessaire).
```
@selector: '[appMyDirective]'
...
Input('appMyDirective') set maFonction(value: string) {
  // Instructions
}
```

# Directive "Input()"
La **directive "Input()"**...
- Elle peut être liée à une fonction: cette fonction doit disposer du keyword "set" et sera appelée chaque fois que l'input de la directive sera modifié.
  ```
  @Input('appMyDirective') setValeur(value: string) {
    console.log('input directive');
    if (!!value) {
      this.background = value;
    } else {
      this.background = 'purple';
    }
  }
  ```

# Accessors
Les **accessors (getters/setters)**...
- Les accessors doivent porter un nom différent de la variable qu'ils modifient (d'où le préfixe "_"). Les getter/setter d'une même variable se différencient par leur signature.
```
_background?: string;
...
get background(): string | undefined {
  return this._background;
}

set background(background: string | undefined) {
  this._background = background;
  // + Instructions additionnelles (logique)
}
```

Les objets **ElementRef**/**Renderer**...
https://www.digitalocean.com/community/tutorials/angular-using-renderer2

- Permettent de modifier le DOM, en modifiant l'attribut "nativeElement" de l'**ElementRef** via le **Renderer**.
```
this.renderer.setStyle(
  // Modification: Style CSS
  this.elRef.nativeElement,'border',`2px dashed ${this.background}`);
  this.renderer.setStyle(this.elRef.nativeElement,'background',this.background);
  this.renderer.removeStyle(this.elRef.nativeElement, 'border-left');

  // Modification: Classe CSS
  this.renderer.addClass(this.elRef.nativeElement, 'wild');
  this.renderer.removeClass(this.elRef.nativeElement, 'wild');

  // Modification: Ajout/Retrait d'(élément HTML)
  const div = this.renderer.createElement('div');
  const text = this.renderer.createText('Hello world!');
  this.renderer.appendChild(div, text);
  this.renderer.appendChild(this.elRef.nativeElement, div);

  // Set the alt property on an image element:
  this.renderer.setProperty(this.elRef.nativeElement, 'alt', 'My new value');

  // Set the value of an input field
  this.renderer.setProperty(this.elRef.nativeElement, 'value', 'My new value');
```

# keyof typeof
  ```
    // Datas (interfaces)
    export interface User {...}
    export enum TYPE {...}
    export type CleUser = keyof typeof TYPE;

    // Component
    const myVar = "PLIP" as CleUser;
    console.log(user[myVar]);
    // Sans "keyof typeof": COMPILATION - type 'CleUser' can't be used to index type 'User'.
```

## Détails
- Les instructions "keyof typeof" permettent de normaliser l'accès aux properties d'un objet/interface.
- Sans "keyof typeof", il est TOUJOURS possible d'accéder aux properties d'un obejt avec un argument de type "string".
```
    console.log(user["plop"]);
    // En cas de string invalide: COMPILATION - Property 'valeur de la string' does not exist on type 'User'
```


# QUESTIONS?
Pourquoi une fonction de directive "input" doit avoir un keyword "set"?
