import { Component } from '@angular/core';
import { trigger, animation, useAnimation, group, transition, animate, style, query } from '@angular/animations';

@Component({
  selector: 'gallery-page-component',
  templateUrl: './gallery-page.component.html',
  styleUrls: ['./gallery-page.component.css'],
  animations: [
    trigger('carousel', [
    ])
  ],
})
export class GalleryPageComponent {
  selectedIndex = 0;
  get selectedImage() {
    return this.images[this.selectedIndex];
  }

  images = [
    '/assets/angular-images/1.jpg',
    '/assets/angular-images/2.png',
    '/assets/angular-images/3.png',
    '/assets/angular-images/4.png'
  ];

  left() {
    this.selectedIndex = Math.max(0, this.selectedIndex - 1);
  }

  right() {
    this.selectedIndex = Math.min(this.selectedIndex + 1, this.images.length - 1);
  }
}
