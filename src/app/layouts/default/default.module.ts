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
import { MatIconModule } from '@angular/material/icon';
import { CryptoWalletViewComponent } from 'src/app/modules/crypto-hoddl/crypto-wallet-view/crypto-wallet-view.component';
import { CryptoTransactionViewComponent } from 'src/app/modules/crypto-hoddl/crypto-transaction-view/crypto-transaction-view.component';
import { CryptoReportViewComponent } from 'src/app/modules/crypto-hoddl/crypto-report-view/crypto-report-view.component';
import { ImportEntryComponent } from 'src/app/modules/file-import/import-entry/import-entry.component';
import { FileImportComponent } from 'src/app/modules/file-import/file-import.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';

@NgModule({
  declarations: [
    DefaultComponent,
    DashboardComponent,
    CryptoHoddlComponent,
    CryptoWalletViewComponent,
    CryptoTransactionViewComponent,
    CryptoReportViewComponent,
    ImportEntryComponent,
    FileImportComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    RouterModule,
    SharedModule,
    MatSidenavModule,
    MatDividerModule,
    MatNativeDateModule,
    MatExpansionModule,
    MatTableModule,
    MatIconModule,
    MatCheckboxModule
  ]
})
export class DefaultModule { }
