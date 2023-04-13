import { Component, OnInit } from '@angular/core';
import { Transaction, TransactionType } from '../../hoddl/crypto.model';
@Component({
  selector: 'app-hoddl-transactions',
  templateUrl: './hoddl-transactions.component.html',
  styleUrls: ['./hoddl-transactions.component.scss']
})
export class HoddlTransactionsComponent implements OnInit {

  displayedColumns = ['Date', 'Type', 'Wallet', 'In', 'Out', 'Worth'];
  transactions: Transaction[] = [{
    Date: "20.02.2020",
    Type: TransactionType.Sell,
    Wallet: "Ledger",
    In: "",
    Out: "0,0045 BTC",
    Worth: "350 €"
  }, {
    Date: "23.02.2021",
    Type: TransactionType.Transaction,
    Wallet: "Coinbase",
    In: "0,21 ETC",
    Out: "0,015 BTC",
    Worth: "200 €"
  }, {
    Date: "24.02.2021",
    Type: TransactionType.Buy,
    Wallet: "Coinbase",
    In: "0,0045 BTC",
    Out: "",
    Worth: "350 €"
  }];

  constructor() { }

  ngOnInit(): void {
  }

}
