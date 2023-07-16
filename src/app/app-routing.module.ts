import { CryptoHoddlComponent } from './modules/crypto-hoddl/crypto-hoddl.component';
import { CryptoImportEntryComponent } from './modules/crypto-hoddl/crypto-import-entry/crypto-import-entry.component';
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
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
