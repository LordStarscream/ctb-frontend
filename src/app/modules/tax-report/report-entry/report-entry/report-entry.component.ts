import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ReportOverview } from 'src/app/modules/crypto-hoddl/crypto.model';
import { ReportService } from 'src/app/modules/services/report.service';

@Component({
  selector: 'app-report-entry',
  templateUrl: './report-entry.component.html',
  styleUrls: ['./report-entry.component.scss']
})
export class ReportEntryComponent implements OnInit, OnDestroy {

  reports: ReportOverview[] = [];
  displayedColumns = ['Id','Year','Income','Donation','Gain'];

  private reportSubscription: Subscription = new Subscription();

  constructor(
    private reportService: ReportService) {}

  ngOnInit(): void {
    this.reportSubscription = this.reportService.getAvailableReports().subscribe({
      next: (response) => {
        this.reports = response;
      },
      error: (error) => {
        console.error('Fehler beim Abruf der report Years', error);
      },
      complete: () => {}
    });
  }

  ngOnDestroy(): void {
    if(this.reportSubscription){
      this.reportSubscription.unsubscribe();
    }
  }

  onIncomeReportClick(id: number){
    console.log(`Income Report clicked for ID: ${id}`);
    this.reportService.generateIncomeReport(id).subscribe({
      next: (response) => {
        this.saveFile(response, 'income.csv')
        console.log('Generating Income-Report success:', response);
      },
      error: (error) => {
        console.error('Generating Income-Report failed', error);
      }
    })
  }

  onDonationReportClick(id: number){
    console.log(`Donation Report clicked for ID: ${id}`);
    this.reportService.generateDonationReport(id).subscribe({
      next: (response) => {
        this.saveFile(response, 'donation.csv')
        console.log('Generating Income-Report success:', response);
      },
      error: (error) => {
        console.error('Generating Income-Report failed', error);
      }
    })
  }

  onGainReportClick(id: number){
    console.log(`Gain Report clicked for ID: ${id}`);
    this.reportService.generateGainReport(id).subscribe({
      next: (response) => {
        this.saveFile(response, 'gain.csv')
        console.log('Generating Income-Report success:', response);
      },
      error: (error) => {
        console.error('Generating Income-Report failed', error);
      }
    })
  }

  private saveFile(data: Blob, fileName: string): void {
    const a = document.createElement('a');
    document.body.appendChild(a);
    const url = window.URL.createObjectURL(data);
    a.href = url;
    a.download = fileName;
    a.click();
    window.URL.revokeObjectURL(url);
    document.body.removeChild(a);
  }
}
