import { Component, HostBinding } from '@angular/core';
import { trigger, stagger, animation, useAnimation, group, transition, animate, style, query } from '@angular/animations';

@Component({
  selector: 'gallery-page-component',
  templateUrl: './gallery-page.component.html',
  styleUrls: ['./gallery-page.component.css'],
  animations: [
    trigger('pageAnimation', [
      transition(':leave', [
        query('img', [
          stagger(100, [
            animate(300, style({ transform: 'translateY(-100px)', opacity: 0 }))
          ])
        ])
      ]),
      transition(':enter', [
        query('.thumbs li, .stage', [
          style({ opacity: 0, transform: 'translateY(-100px)' }),
          stagger(100, [
            animate(300, style('*'))
          ])
        ])
      ]),
    ]),
    trigger('carouselAnimation', [
      transition(':enter', []),
      transition('* => *', [
        style({ height: '!' }),
        query('img', style({
          position: 'absolute',
          left:0,
          top:0,
          width:'100%'
        })),
        group([
          animate(300, style({ height: '*' })),
          query(':leave', [
            animate(300, style({ opacity: 0 }))
          ]),
          query(':enter', [
            style({ opacity: 0 }),
            animate(300, style({ opacity: 1 }))
          ]),
        ]),
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
