import { Component, OnDestroy, OnInit } from '@angular/core';
import { FileImportService } from '../services/file-import.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'file-import',
  templateUrl: './file-import.component.html',
  styleUrls: ['./file-import.component.scss']
})
export class FileImportComponent implements OnInit, OnDestroy {
  selectedUploadType: string = ''; // Standard-Upload-Typ
  fileName = '';
  file: File | null = null;
  importTypes: string[] = [];
  private fileImportSubscription: Subscription = new Subscription();

  constructor(private fileImportService: FileImportService) {}

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
        },
        error: (error) => {
          console.error('Upload error', error);
        }
      })
    }
  }

}
