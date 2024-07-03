import { environment } from './../../../environment';
import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Deal } from '../models/deal.model';

@Injectable({
  providedIn: 'root'
})
export class DealService {

  contantUpdate = new EventEmitter<void>();

  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getDeals(accountId: number): Observable<Deal[]>{
    const url = `${this.apiUrl}/cfg/transactions/${accountId}`;
    return this.http.get<Deal[]>(url);
  }

  saveDeals(deals: Deal[]): Observable<void>{
    const url = `${this.apiUrl}/cfd/transactions`;
    return this.http.post<void>(url, deals);
  }

}
