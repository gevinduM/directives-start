import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { BasicHighlighDirectiveDirective } from './directives/BasicHighlightDirective/basic-highligh-directive.directive';
import { BetterHighlighDirectiveDirective } from './directives/BetterHighlighDirective/better-highligh-directive.directive';
import { UnlessDirective } from './directives/UnlessDirective/unless.directive'

@NgModule({
  declarations: [
    AppComponent,
    BasicHighlighDirectiveDirective,
    BetterHighlighDirectiveDirective,
    UnlessDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
