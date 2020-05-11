import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NumbercruncherComponent } from './numbercruncher/numbercruncher.component';
import { CsvloaderComponent } from './csvloader/csvloader.component'
import { CheckCsvGuard } from './check-csv.guard';

const routes: Routes = [
 {path : 'csv', component : CsvloaderComponent},
 {path : 'cruncher', component : NumbercruncherComponent, canActivate: [CheckCsvGuard]},
 {path : '', component : CsvloaderComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
