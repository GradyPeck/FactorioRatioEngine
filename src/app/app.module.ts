import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NgxCsvParserModule } from 'ngx-csv-parser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NumbercruncherComponent } from './numbercruncher/numbercruncher.component';
import { FileInputValueAccessor } from './FileInputValueAccessor'

@NgModule({
  declarations: [
    AppComponent,
    NumbercruncherComponent,
    FileInputValueAccessor
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgxCsvParserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
