import { Component } from '@angular/core';
import { ReportEntry } from '../crypto.model';

@Component({
  selector: 'app-hoddl-report-transactions',
  templateUrl: './hoddl-report-transactions.component.html',
  styleUrls: ['./hoddl-report-transactions.component.scss']
})
export class HoddlReportTransactionsComponent {
  displayedColumns = ['Value', 'Asset', 'InDate', 'OutDate'];
  reportTransactions: ReportEntry[] = [{
    "Value": 10,
    "Asset": "BTC",
    "InDate": "04/04/2020",
    "OutDate": "05/05/2020",
    "SL": "short",
    "Proceed": "",
    "Costbase": 0.45,
    "Profit": 20
  }, {
    "Value": 22,
    "Asset": "ETH",
    "InDate": "04/04/2020",
    "OutDate": "05/05/2020",
    "SL": "short",
    "Proceed": "",
    "Costbase": 0.45,
    "Profit": 29
  }, {
    "Value": 33,
    "Asset": "BTC",
    "InDate": "04/04/2020",
    "OutDate": "05/05/2020",
    "SL": "short",
    "Proceed": "",
    "Costbase": 0.35,
    "Profit": 10
  }];

}
