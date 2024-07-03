import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule} from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from  '@angular/material/list';
import { MatTableModule } from '@angular/material/table';
import { DefaultModule } from './layouts/default/default.module';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { TaxReportComponent } from './modules/tax-report/tax-report.component';
import { ReportEntryComponent } from './modules/tax-report/report-entry/report-entry/report-entry.component';
import { JournalComponent } from './modules/journal/journal.component';
import { JournalEntryComponent } from './modules/journal/journal-entry/journal-entry.component';
import { AccountComponent } from './modules/account/accountDeals/account.component';
import { HotTableModule } from '@handsontable/angular';
import { registerAllModules } from 'handsontable/registry';
import { AccountListComponent } from './modules/account/accountlist/accountlist.component';

// register Handsontable's modules
registerAllModules();

@NgModule({
  declarations: [
    AppComponent,
    TaxReportComponent,
    ReportEntryComponent,
    JournalComponent,
    JournalEntryComponent,
    AccountComponent,
    AccountListComponent
  ],
  imports: [
    DefaultModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
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
    MatSnackBarModule,
    MatCheckboxModule,
    HotTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
