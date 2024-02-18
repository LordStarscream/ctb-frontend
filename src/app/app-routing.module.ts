import { CryptoHoddlComponent } from './modules/crypto-hoddl/crypto-hoddl.component';
import { FileImportComponent } from './modules/file-import/file-import.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { TaxReportComponent } from './modules/tax-report/tax-report.component';
import { JournalComponent } from './modules/journal/journal.component';


const routes: Routes = [
  {
    path: '',
    component: DefaultComponent,
    children: [
      {
        path: '',
        component: DashboardComponent
      },
      {
        path: 'journal',
        component: JournalComponent
      },
      {
        path: 'hoddl',
        component: CryptoHoddlComponent
      },
      {
        path: 'report',
        component: TaxReportComponent
      },
      {
        path: 'fileImport',
        component: FileImportComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
