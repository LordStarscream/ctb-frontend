import { environment } from './../../../environment';
import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { TransactionImport } from 'src/app/modules/models/transaction-import.model';

@Injectable({
  providedIn: 'root'
})
export class FileImportService {

  contantUpdate = new EventEmitter<void>();

  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getFileImportTypes(): Observable<string[]>{
    const url = `${this.apiUrl}/file/importTypes`;
    return this.http.get<string[]>(url);
  }

  uploadFile(file: File, importFormat: string): Observable<any>{
    const formData = new FormData();
    formData.append('file', file);
    formData.append('importFormat', importFormat);

    const headers = new HttpHeaders();

    return this.http.post(`${this.apiUrl}/file/import`, formData, { headers });
  }

  getImportTransactions(): Observable<TransactionImport[]> {
    const url = `${this.apiUrl}/file/transactionImports`;
    return  this.http.get<TransactionImport[]>(url).pipe(
      map((data: any[]) => {
        // Konvertieren Sie das dateTime-Feld in Date-Objekte
        return data.map(item => {
          item.date = TransactionImport.convertToLocalDate(item.dateTime);
          return item;
        });
      })
    );
  }
}
