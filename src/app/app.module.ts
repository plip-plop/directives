import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DeferComponent } from './components/defer/defer.component';
import { Enfant1Component } from './components/enfant1/enfant1.component';
import { Enfant2Component } from './components/enfant2/enfant2.component';
import { Parent1Component } from './components/parent1/parent1.component';
import { Parent2Component } from './components/parent2/parent2.component';
import { CliquerDirective } from './directives/cliquer.directive';
import { MyDirectiveDirective } from './directives/my-directive.directive';
import { KeyofTypeofComponent } from './components/keyof-typeof/keyof-typeof.component';

@NgModule({
  declarations: [AppComponent, MyDirectiveDirective, Parent1Component, Enfant1Component, Enfant2Component, CliquerDirective, DeferComponent, Parent2Component, KeyofTypeofComponent],
  providers: [],
  bootstrap: [AppComponent],
  imports: [BrowserModule, FormsModule],
  exports: [BrowserModule, FormsModule],
})
export class AppModule { }
