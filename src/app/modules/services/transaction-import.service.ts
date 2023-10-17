import { environment } from './../../../environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { TransactionImport } from 'src/app/modules/models/transaction-import.model';
import { TransactionImportInfoModel } from '../models/transaction-import-info.model';

@Injectable({
  providedIn: 'root'
})
export class TransactionImportService {

  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getImportTransactions(): Observable<TransactionImport[]> {
    const url = `${this.apiUrl}/transactionImports`;
    return  this.http.get<TransactionImport[]>(url).pipe(
      map((data: any[]) => {
        return data.map(item => {
          item.date = TransactionImport.convertToLocalDate(item.dateTime);
          return item;
        });
      })
    );
  }

  executeImportTransactions(): Observable<TransactionImportInfoModel[]> {
    const url = `${this.apiUrl}/transactionImports/importAll`;
    return this.http.get<TransactionImportInfoModel[]>(url);
  }
}
