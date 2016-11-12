import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { UserDataComponent } from './user-data/user-data.component';
import { Componente2Component } from './carpeta1/componente2/componente2.component';
import { LoggerService } from './logger.service';

import './rxjs-operators';
import { UppercasePipe } from './uppercase.pipe';
import { HighlightDirective } from './highlight.directive';  // Import only operators for Obserbables

@NgModule({
  declarations: [
    AppComponent,
    UserDataComponent,
    Componente2Component,
    UppercasePipe,
    HighlightDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [ LoggerService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
