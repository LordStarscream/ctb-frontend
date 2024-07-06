import { environment } from './../../../environment';
import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Deal } from '../models/deal.model';
import { Currency } from '../models/currency.model';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {

  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getAllCurrencies(): Observable<Currency[]> {
    const url = `${this.apiUrl}/currency`;
    return this.http.get<Currency[]>(url);
  }

  addCurrency(currency: Currency): Observable<Currency> {
    const url = `${this.apiUrl}/currency`;
    return this.http.post<Currency>(url, currency);
  }
}
