import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AccountService } from '../../services/account.service';
import { CurrencyService } from '../../services/currency.service';
import { Currency } from '../../models/currency.model';

@Component({
  selector: 'app-account-dialog',
  templateUrl: './account-dialog.component.html',
  styleUrls: ['./account-dialog.component.scss']
})
export class AccountDialogComponent implements OnInit{

  accountForm: FormGroup;
  types: String[] = [];
  currencies: Currency[] = [];

  constructor(
    public dialogRef: MatDialogRef<AccountDialogComponent>,
    private fb: FormBuilder,
    private accountService: AccountService,
    private currencyService: CurrencyService
  ) {
    this.accountForm = this.fb.group({
      type: ['', Validators.required],
      name: ['', Validators.required],
      information: ['', Validators.required],
      referenceCurrency: ['', Validators.required],
      newType: [''],
      newCurrency: ['']
    });
  }

  ngOnInit(): void {
    this.accountService.getAccountTypes().subscribe(data => {
      this.types = data;
    });
    this.currencyService.getAllCurrencies().subscribe(data => {
      this.currencies = data;
    });
  }

  onCancel(): void {
    this.dialogRef.close();
  }

  onSave(): void {
    if (this.accountForm.valid) {
      const newAccount = this.accountForm.value;
      this.dialogRef.close(newAccount);
    }
  }

  addNewType(): void {
    const newType = this.accountForm.get('newType')?.value;
    if (newType && !this.types.includes(newType)) {
      this.types.push(newType);
      this.accountForm.get('type')?.setValue(newType);
      this.accountForm.get('newType')?.reset();
    }
  }

  addNewCurrency(): void {
    const newCurrency = this.accountForm.get('newCurrency')?.value;
    if (newCurrency && !this.currencies.includes(newCurrency)) {
      this.currencies.push(newCurrency);
      this.accountForm.get('referenceCurrency')?.setValue(newCurrency);
      this.accountForm.get('newCurrency')?.reset();
    }
  }
}
