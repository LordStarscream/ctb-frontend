import { Component } from '@angular/core';
import { ReportEntry } from 'src/app/modules/crypto-hoddl/crypto.model';

@Component({
  selector: 'app-report-entry',
  templateUrl: './report-entry.component.html',
  styleUrls: ['./report-entry.component.scss']
})
export class ReportEntryComponent {

  reportEntries: ReportEntry[] = [];
  displayedColumns = ['BuyDate', 'SellDate', 'Currency',
  'Ammount', 'Holding', 'InExchange', 'OutExchange', 'Profit'];
}
