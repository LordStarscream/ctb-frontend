import { environment } from './../../../environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FileImportService {

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
}
