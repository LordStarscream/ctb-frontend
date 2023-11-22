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

  }
  onDonationReportClick(id: number){
    console.log(`Donation Report clicked for ID: ${id}`);

  }
  onGainReportClick(id: number){
    console.log(`Gain Report clicked for ID: ${id}`);

  }
}
