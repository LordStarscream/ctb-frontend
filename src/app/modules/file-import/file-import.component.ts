import { Component, OnDestroy, OnInit } from '@angular/core';
import { FileImportService } from '../services/file-import.service';
import { Subscription } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'file-import',
  templateUrl: './file-import.component.html',
  styleUrls: ['./file-import.component.scss']
})
export class FileImportComponent implements OnInit, OnDestroy {
  checkboxAutoRate: boolean = false;
  selectedUploadType: string = ''; // Standard-Upload-Typ
  fileName = '';
  file: File | null = null;
  importTypes: string[] = [];
  private fileImportSubscription: Subscription = new Subscription();

  constructor(
    private fileImportService: FileImportService,
    private snackBar: MatSnackBar) {}


  ngOnInit(): void {
      this.fileImportSubscription = this.fileImportService.getFileImportTypes().subscribe({
        next: (response) => {
          this.importTypes = response;
        },
        error: (error) => {
          console.error('Fehler beim Abruf der ImportTypes', error);
        },
        complete: () => {}
      });
  }

  ngOnDestroy(): void {
    if(this.fileImportSubscription){
      this.fileImportSubscription.unsubscribe();
    }
  }

  onFileSelected(event: any) {
    this.file = event.target.files[0];
    if(this.file != null){
      this.fileName = this.file.name;
    }
  }

  uploadFile(){
    if (this.file && this.selectedUploadType){
      this.fileImportService.uploadFile(this.file, this.selectedUploadType).subscribe({
        next: (response) => {
          console.log('Upload success:', response);
          this.onUploadSuccess();
        },
        error: (error) => {
          console.error('Upload error', error);
          this.onUploadFailure();
        }
      })
    }
  }

  onUploadSuccess() {
    this.snackBar.open('Upload erfolgreich!', 'OK', {
      duration: 3000, // Anzeigedauer der Meldung in Millisekunden (3 Sekunden)
      verticalPosition: 'top'
    });
    this.fileImportService.contantUpdate.emit();
  }

  onUploadFailure() {
    this.snackBar.open('Upload fehlgeschlagen!', 'OK', {
      duration: 3000, // Anzeigedauer der Meldung in Millisekunden (3 Sekunden)
      verticalPosition: 'top',
      panelClass: ['error-snackbar'], // CSS-Klasse für Fehlermeldung-Styling (optional)
    });
  }

  importTrades(){
    this.snackBar.open('importing Trades clicked', 'OK', {
      duration: 3000,
      verticalPosition: 'top'
    });
  }
}
