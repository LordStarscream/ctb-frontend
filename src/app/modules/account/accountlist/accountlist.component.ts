import { Component, OnInit } from '@angular/core';
import { Account } from '../../models/account.model';
import { AccountService } from '../../services/account.service';

@Component({
  selector: 'accountlist',
  templateUrl: './accountlist.component.html',
  styleUrls: ['./accountlist.component.scss']
})
export class AccountListComponent implements OnInit {
  accounts: Account[] = [];
  selectedAccount: Account | null = null;

  constructor(private accountService: AccountService) {}

  ngOnInit(): void {
    this.loadAccounts();
  }

  loadAccounts() {
    this.accountService.getAccounts().subscribe(accounts => {
      this.accounts = accounts;
    });
  }

  selectAccount(account: Account) {
    this.selectedAccount = account;
  }

  createAccount() {
    const newAccount: Account = {id:-1, name: 'Neuer Account', referenceCurrency: 'EUR' };
    this.accountService.createAccount(newAccount).subscribe(account => {
      this.accounts.push(account);
    });
  }
}
