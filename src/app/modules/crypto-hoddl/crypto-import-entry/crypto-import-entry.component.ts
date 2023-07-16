import { Component } from '@angular/core';
import { ImportTransaction } from '../crypto.model';

@Component({
  selector: 'app-crypto-import-entry',
  templateUrl: './crypto-import-entry.component.html',
  styleUrls: ['./crypto-import-entry.component.scss']
})
export class CryptoImportEntryComponent {
  displayedColumns = ['Date', 'Type', 'Wallet', 'In', 'Out'];
  ImportTransactions: ImportTransaction[] = [{
    "Date": "12/12/2021",
    "Type": "Transaction",
    "Wallet": "Ledger Hoddl",
    "In": "0,00234 BTC",
    "Out": "0,01 ETH",
  }, {
    "Date": "12/12/2021",
    "Type": "Transaction",
    "Wallet": "Ledger Hoddl",
    "In": "0,00234 BTC",
    "Out": "0,01 ETH",
  }, {
    "Date": "12/12/2021",
    "Type": "Transaction",
    "Wallet": "Ledger Hoddl",
    "In": "0,00234 BTC",
    "Out": "0,01 ETH"
  }];
}
