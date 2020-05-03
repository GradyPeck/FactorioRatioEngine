import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NumbercruncherComponent } from './numbercruncher/numbercruncher.component';
import { CsvloaderComponent } from './csvloader/csvloader.component'

const routes: Routes = [
 {path : 'csv', component : CsvloaderComponent},
 {path : 'cruncher', component : NumbercruncherComponent},
 {path : '', component : CsvloaderComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
