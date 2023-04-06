import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTableModule } from '@angular/material/table';
import { AppComponent } from './app.component';
import { CryptoHODLScreenComponent } from './crypto-hodlscreen/crypto-hodlscreen.component';
import { WalletOverviewComponent } from './crypto-hodlscreen/wallet-overview/wallet-overview.component';
import { ReportTransactionOverviewComponent } from './crypto-hodlscreen/report-transaction-overview/report-transaction-overview.component';
import { CryptoTransactionsComponent } from './crypto-hodlscreen/crypto-transactions/crypto-transactions.component';

@NgModule({
  declarations: [
    AppComponent,
    CryptoHODLScreenComponent,
    WalletOverviewComponent,
    ReportTransactionOverviewComponent,
    CryptoTransactionsComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    CommonModule,
    MatExpansionModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
