import { Component, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'crypto-file-import',
  templateUrl: './crypto-file-import.component.html',
  styleUrls: ['./crypto-file-import.component.scss']
})
export class CryptoFileImportComponent {
  fileName = '';
  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    if (file) {
      // Hier kannst du die ausgewählte Datei verwenden, z.B. für die Anzeige im UI oder für den Upload
    }
  }
  /*
    constructor(private http: HttpClient) {}

    onFileSelected(event) {

        const file:File = event.target.files[0];

        if (file) {

            this.fileName = file.name;

            const formData = new FormData();

            formData.append("thumbnail", file);

            const upload$ = this.http.post("/api/thumbnail-upload", formData);

            upload$.subscribe();
        }
    }
    */
}
