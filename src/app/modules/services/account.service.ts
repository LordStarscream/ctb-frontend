import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from './../../../environment';
import { Account } from '../models/account.model';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getAccounts(): Observable<Account[]> {
    const url = `${this.apiUrl}/accounts`;
    return this.http.get<Account[]>(url);
  }

  createAccount(account: Account): Observable<Account> {
    const url = `${this.apiUrl}/account`;
    return this.http.post<Account>(url, account);
  }
}
