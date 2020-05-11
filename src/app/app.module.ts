import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NgxCsvParserModule } from 'ngx-csv-parser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NumbercruncherComponent } from './numbercruncher/numbercruncher.component';
import { FileInputValueAccessor } from './FileInputValueAccessor';
import { CsvloaderComponent } from './csvloader/csvloader.component';
import { MyFilterPipe } from './my-filter.pipe'

@NgModule({
  declarations: [
    AppComponent,
    NumbercruncherComponent,
    FileInputValueAccessor,
    CsvloaderComponent,
    MyFilterPipe
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
