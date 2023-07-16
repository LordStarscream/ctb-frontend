import { MatTableModule } from '@angular/material/table';
import { MatDividerModule } from '@angular/material/divider';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default.component';
import { DashboardComponent } from 'src/app/modules/dashboard/dashboard.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CryptoHoddlComponent } from 'src/app/modules/crypto-hoddl/crypto-hoddl.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatNativeDateModule } from '@angular/material/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { CryptoWalletViewComponent } from 'src/app/modules/crypto-hoddl/crypto-wallet-view/crypto-wallet-view.component';
import { CryptoTransactionViewComponent } from 'src/app/modules/crypto-hoddl/crypto-transaction-view/crypto-transaction-view.component';
import { CryptoReportViewComponent } from 'src/app/modules/crypto-hoddl/crypto-report-view/crypto-report-view.component';
import { CryptoImportEntryComponent } from 'src/app/modules/crypto-hoddl/crypto-import-entry/crypto-import-entry.component';

@NgModule({
  declarations: [
    DefaultComponent,
    DashboardComponent,
    CryptoHoddlComponent,
    CryptoWalletViewComponent,
    CryptoTransactionViewComponent,
    CryptoReportViewComponent,
    CryptoImportEntryComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    MatSidenavModule,
    MatDividerModule,
    MatNativeDateModule,
    MatExpansionModule,
    MatTableModule
  ]
})
export class DefaultModule { }
