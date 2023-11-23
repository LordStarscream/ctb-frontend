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

  generateReport(): Observable<any> {
    const url = `${this.apiUrl}/report/updateReports`;
    const formData = new FormData();
    const headers = new HttpHeaders();
    return this.http.post<any>(url, formData, { headers });
  }

  generateIncomeReport(reportId: number): Observable<Blob> {
    return this.http.get(`${this.apiUrl}/report/incomeReport/${reportId}`,{ responseType: 'blob',});
  }

  generateDonationReport(reportId: number): Observable<Blob> {
    const url = `${this.apiUrl}/report/donationReport`;
    return this.http.get(`${url}/${reportId}`, { responseType: 'blob' });
  }

  generateGainReport(reportId: number): Observable<any> {
    const url = `${this.apiUrl}/report/gainReport`;
    return this.http.get(`${url}/${reportId}`, { responseType: 'blob' });
  }
}
