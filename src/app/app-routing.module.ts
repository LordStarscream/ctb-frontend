import { CryptoHoddlComponent } from './modules/crypto-hoddl/crypto-hoddl.component';
import { CryptoImportEntryComponent } from './modules/crypto-hoddl/crypto-import-entry/crypto-import-entry.component';
import { CryptoFileImportComponent } from './modules/crypto-hoddl/crypto-file-import/crypto-file-import.component';
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
        component: CryptoImportEntryComponent
      },
      {
        path: 'fileImport',
        component: FileImportComponent
      },
      {
        path: 'fileUpload',
        component: CryptoFileImportComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
