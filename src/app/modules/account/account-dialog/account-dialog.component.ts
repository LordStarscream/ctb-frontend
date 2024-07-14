import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AccountService } from '../../services/account.service';
import { CurrencyService } from '../../services/currency.service';
import { Currency } from '../../models/currency.model';
import { Observable, of } from 'rxjs';
import { startWith, map } from 'rxjs/operators';

@Component({
  selector: 'app-account-dialog',
  templateUrl: './account-dialog.component.html',
  styleUrls: ['./account-dialog.component.scss']
})
export class AccountDialogComponent implements OnInit{

  accountForm: FormGroup;
  types: string[] = [];
  currencies: Currency[] = [];
  filteredTypes: Observable<string[]> = of([]);
  filteredCurrencies: Observable<Currency[]> = of([]);
  newType: string = '';
  showAddTypeOption: boolean = false;
  newCurrency: string = '';
  showAddCurrencyOption: boolean = false;

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
      referenceCurrency: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.accountService.getAccountTypes().subscribe(data => {
      this.types = data;
      this.filteredTypes = this.accountForm.controls['type'].valueChanges.pipe(
        startWith(''),
        map(value => this._filterAccountTypes(value))
      );

    });
    this.currencyService.getAllCurrencies().subscribe(data => {
      this.currencies = data;
      this.filteredCurrencies = this.accountForm.controls['referenceCurrency'].valueChanges.pipe(
        startWith(''),
        map(value => this._filterCurrencies(value))
      );
    });
  }

  private _filterAccountTypes(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.types.filter(option => option.toLowerCase().includes(filterValue));
  }

  private _filterCurrencies(value: string): Currency[] {
    const filterValue = value.toLowerCase();
    return this.currencies.filter(option => option.ticker.toLowerCase().includes(filterValue));
  }

  onTypeSelected(event: any): void {
    this.showAddTypeOption = false;
  }

  onCurrencySelected(event: any): void {
    this.showAddCurrencyOption = false;
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
    const newType = this.accountForm.get('type')?.value;
    if (newType && !this.types.includes(newType)) {
      this.types.push(newType);
      this.accountForm.get('type')?.setValue(newType);
    }
  }

  addNewCurrency(): void {
    const newCurrencyTicker = this.accountForm.get('referenceCurrency')?.value;
    if (newCurrencyTicker && !this.currencies.some(currency => currency.ticker === newCurrencyTicker)) {
      const newCurrency: Currency = { ticker: newCurrencyTicker, name: newCurrencyTicker };
      this.currencies.push(newCurrency);
      this.accountForm.get('referenceCurrency')?.setValue(newCurrency);
    }
  }
}
