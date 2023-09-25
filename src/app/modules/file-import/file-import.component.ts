import { Component } from '@angular/core';

@Component({
  selector: 'file-import',
  templateUrl: './file-import.component.html',
  styleUrls: ['./file-import.component.scss']
})
export class FileImportComponent {
  fileName = '';
  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    if (file) {
      // Hier kannst du die ausgewählte Datei verwenden, z.B. für die Anzeige im UI oder für den Upload
    }
  }
}
