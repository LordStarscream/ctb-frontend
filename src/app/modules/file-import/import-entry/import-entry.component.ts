import { Component, OnDestroy, OnInit } from '@angular/core';
import { TransactionImport } from 'src/app/modules/models/transaction-import.model';
import { FileImportService } from '../../services/file-import.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-import-entry',
  templateUrl: './import-entry.component.html',
  styleUrls: ['./import-entry.component.scss']
})
export class ImportEntryComponent implements OnInit, OnDestroy {
  importTransactions: TransactionImport[] = [];
  private importEntrySubscription: Subscription = new Subscription();

  constructor(private fileImportService: FileImportService) {}

  displayedColumns = ['Date', 'Type', 'Exchange', 'In', 'Out'];

  ngOnInit(): void {
    this.loadImportTransactions();
    this.fileImportService.contantUpdate.subscribe(() => {
      this.refreshContent();
    })
  }

  ngOnDestroy(): void {
      this.importEntrySubscription.unsubscribe();
  }

  private loadImportTransactions() {
    this.importEntrySubscription = this.fileImportService.getImportTransactions().subscribe({
      next: (response) => {
        this.importTransactions = response;
        console.log("Import Transactions: ", this.importTransactions);
      },
      error: (error) => {
        console.error('Fehler beim Abruf der ImportTypes', error);
      },
      complete: () => {}
    });
  }

  refreshContent(){
    this.importEntrySubscription.unsubscribe(); // Beenden Sie das vorherige Abonnement
    this.loadImportTransactions();
  }
}
