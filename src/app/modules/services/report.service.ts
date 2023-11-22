import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environment';
import { ReportOverview } from '../crypto-hoddl/crypto.model';

@Injectable({
  providedIn: 'root'
})
export class ReportService {

  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getAvailableReportYears(): Observable<any[]> {
    const url = `${this.apiUrl}/report/availableYears`;
    return  this.http.get<any[]>(url);
  }

  getAvailableReports(): Observable<ReportOverview[]> {
    const url = `${this.apiUrl}/report/reports`;
    return  this.http.get<ReportOverview[]>(url);
  }

  generateReport(year: any): Observable<any> {
    const url = `${this.apiUrl}/report/createReport`;
    const formData = new FormData();
    formData.append('year', year);

    const headers = new HttpHeaders();
    return this.http.post<any>(url, formData, { headers });
  }
}
