import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Account } from '../../models/account.model';
import { AccountService } from '../../services/account.service';
import { AccountDialogComponent } from '../account-dialog/account-dialog.component';

@Component({
  selector: 'accountlist',
  templateUrl: './accountlist.component.html',
  styleUrls: ['./accountlist.component.scss']
})
export class AccountListComponent implements OnInit {
  accounts: Account[] = [];
  selectedAccount: Account | null = null;

  constructor(private accountService: AccountService, public dialog: MatDialog) {}

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

  openDialog(): void {
    const dialogRef = this.dialog.open(AccountDialogComponent, {
      width: '250px'
    });
  }

  createAccount() {
    const newAccount: Account = {id:-1, name: 'Neuer Account', referenceCurrency: 'EUR' };
    this.accountService.createAccount(newAccount).subscribe(account => {
      this.accounts.push(account);
    });
  }
}
