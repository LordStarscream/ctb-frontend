import { Component } from '@angular/core';

interface Image {
  imageUrl: string;
  preview: boolean;
  tags: string[];
}

@Component({
  selector: 'app-journal-entry',
  templateUrl: './journal-entry.component.html',
  styleUrls: ['./journal-entry.component.scss']
})
export class JournalEntryComponent {
  images: Image[] = [];
  newImageUrl: string = '';
  newTag: string = '';

  addImage() {
    if (this.newImageUrl.trim() !== '') {
      const newImage: Image = { imageUrl: this.newImageUrl, preview: true, tags: []};
      this.images.push(newImage);
      this.newImageUrl = '';
    }
  }

  addTag(image: Image, tag: string) {
    if (!image.tags.includes(tag)) {
      image.tags.push(tag);
    }
  }

  removeTag(image: Image, tag: string) {
    image.tags = image.tags.filter(t => t !== tag);
  }

  toggleImageSize(image: Image) {
    image.preview = !image.preview;
  }

  openInNewTab(image: Image) {
    window.open(image.imageUrl, '_blank');
  }

  stopPropagation(event: Event) {
    event.stopPropagation();
  }
}
