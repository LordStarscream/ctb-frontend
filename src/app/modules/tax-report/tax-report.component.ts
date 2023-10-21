import { Component, OnDestroy, OnInit } from '@angular/core';
import { ReportService } from '../services/report.service';
import { Subscription } from 'rxjs/internal/Subscription';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-tax-report',
  templateUrl: './tax-report.component.html',
  styleUrls: ['./tax-report.component.scss']
})
export class TaxReportComponent implements OnInit, OnDestroy {
  selectedReport: any;
  reports: any[] = [];
  private reportSubscription: Subscription = new Subscription();

  constructor(
    private reportService: ReportService,
    private snackBar: MatSnackBar) {}

  ngOnInit(): void {
    this.reportSubscription = this.reportService.getAvailableReportYears().subscribe({
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

  createReport() {
    console.log("In CreateReport() of Component")
    this.reportService.generateReport(this.selectedReport).subscribe({
      next: (response) => {
        console.log('Upload success:', response);
        this.onCreateSuccess();
      },
      error: (error) => {
        console.error('Upload error', error);
        this.onCreateFailure();
      }
    })
  }

  onCreateSuccess() {
    this.snackBar.open('Report Creation Succsessfully!', 'OK', {
      duration: 3000, // Anzeigedauer der Meldung in Millisekunden (3 Sekunden)
      verticalPosition: 'top'
    });
    //this.fileImportService.contantUpdate.emit();
  }

  onCreateFailure() {
    this.snackBar.open('Report Creation failed!', 'OK', {
      duration: 3000, // Anzeigedauer der Meldung in Millisekunden (3 Sekunden)
      verticalPosition: 'top',
      panelClass: ['error-snackbar'], // CSS-Klasse für Fehlermeldung-Styling (optional)
    });
  }


}

