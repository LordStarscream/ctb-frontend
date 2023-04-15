import { MatDividerModule } from '@angular/material/divider';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default.component';
import { DashboardComponent } from 'src/app/modules/dashboard/dashboard.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CryptoHoddlComponent } from 'src/app/modules/crypto-hoddl/crypto-hoddl.component';
import { MatSidenavModule } from '@angular/material/sidenav';



@NgModule({
  declarations: [
    DefaultComponent,
    DashboardComponent,
    CryptoHoddlComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    MatSidenavModule,
    MatDividerModule
  ]
})
export class DefaultModule { }
