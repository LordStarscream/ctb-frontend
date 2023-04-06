import { Component } from '@angular/core';
import { Transaction } from '../crypto.model';

@Component({
  selector: 'app-report-transaction-overview',
  templateUrl: './report-transaction-overview.component.html',
  styleUrls: ['./report-transaction-overview.component.scss']
})
export class ReportTransactionOverviewComponent {

  displayedColumns = ['Value', 'Asset', 'InDate', 'OutDate'];
  reportTransactions: Transaction[] = [{
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
