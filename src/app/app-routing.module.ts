import { CryptoHoddlComponent } from './modules/crypto-hoddl/crypto-hoddl.component';
import { ImportEntryComponent } from './modules/file-import/import-entry/import-entry.component';
import { FileImportComponent } from './modules/file-import/file-import.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';


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
        path: 'hoddl',
        component: CryptoHoddlComponent
      },
      {
        path: 'report',
        component: ImportEntryComponent
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
