import { Component } from '@angular/core';
import { ReportEntry } from '../crypto.model';

@Component({
  selector: 'crypto-transaction-view',
  templateUrl: './crypto-transaction-view.component.html',
  styleUrls: ['./crypto-transaction-view.component.scss']
})
export class CryptoTransactionViewComponent {
  displayedColumns = ['Value', 'Asset', 'InDate', 'OutDate'];
  transactions: ReportEntry[] = [{
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
