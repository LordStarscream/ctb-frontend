import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderToolbarComponent } from './header-toolbar/header-toolbar.component';
import { HoddlLayoutComponent } from './layout/hoddl-layout/hoddl-layout.component';
import { HoddlWalletViewComponent } from './hoddl/hoddl-wallet-view/hoddl-wallet-view.component';
import { HoddlTransactionsComponent } from './hoddl/hoddl-transactions/hoddl-transactions.component';
import { HoddlReportTransactionsComponent } from './hoddl/hoddl-report-transactions/hoddl-report-transactions.component';
import { ForexTradeLayoutComponent } from './layout/forex-trade-layout/forex-trade-layout.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule} from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from  '@angular/material/list';
import { MatTableModule } from '@angular/material/table';
import { MatNativeDateModule } from '@angular/material/core';
import { MatExpansionModule } from '@angular/material/expansion';


@NgModule({
  declarations: [
    AppComponent,
    HeaderToolbarComponent,
    HoddlLayoutComponent,
    HoddlWalletViewComponent,
    HoddlTransactionsComponent,
    HoddlReportTransactionsComponent,
    ForexTradeLayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatMenuModule,
    FormsModule,
    MatTableModule,
    MatNativeDateModule,
    MatExpansionModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
