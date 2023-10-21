import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environment';

@Injectable({
  providedIn: 'root'
})
export class ReportService {

  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getAvailableReportYears(): Observable<String[]> {
    const url = `${this.apiUrl}/report/availableYears`;
    return  this.http.get<String[]>(url);
  }

  generateReport(year: any): Observable<any> {
    const url = `${this.apiUrl}/report/createReport`;
    const formData = new FormData();
    formData.append('year', year);

    const headers = new HttpHeaders();
    return this.http.post<any>(url, formData, { headers });
  }
}
