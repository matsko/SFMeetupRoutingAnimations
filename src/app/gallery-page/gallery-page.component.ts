import { Component, HostBinding } from '@angular/core';
import { trigger, animation, useAnimation, group, transition, animate, style, query } from '@angular/animations';

@Component({
  selector: 'gallery-page-component',
  templateUrl: './gallery-page.component.html',
  styleUrls: ['./gallery-page.component.css'],
  animations: [
    trigger('pageAnimation', [
      transition(':enter', []),
      transition(':leave', []),
    ]),
    trigger('carouselAnimation', [
      transition(':enter', []),
      transition('* => *', [
        style({ height:'!' }),
        query('img', style({
          position: 'absolute',
          left:0,
          top:0,
          width:'100%'
        })),
        query(':enter', style({ transform: 'translateX(-100%)' })),
        group([
          animate('300ms ease-in', style({ height: '*' })),
          query(':leave', [
            animate('500ms ease-out', style({ transform: 'translateX(100%)'}))
          ]),
          query(':enter',[
            animate('500ms ease-out', style({ transform: 'translateX(0%)'}))
          ])
        ])
      ]),
      transition(':leave', [])
    ])
  ],
})
export class GalleryPageComponent {
  @HostBinding('@pageAnimation')
  public animatePage = true;

  public selectedIndex = 0;

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
