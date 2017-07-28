import { Component } from '@angular/core';
import { Router, RouterOutlet} from '@angular/router';
import { trigger, animation, useAnimation, group, transition, animate, style, query } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['app.component.css'],
  animations: [
    trigger('routeAnimation', [
      transition('listPage => galleryPage', [
        style({ position: 'relative' }),
        query(':enter, :leave', style({
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%'
        })),
        group([
          query(':enter', [
            style({ transform: 'translateX(-100%)' }),
            animate('300ms ease-out', style({ transform: 'translateX(0%)' }))
          ]),
          query(':leave', [
            animate('300ms ease-out', style({ transform: 'translateX(100%)' }))
          ])
        ])
      ]),
      transition('galleryPage => listPage', [
        style({ position: 'relative' }),
        query(':enter, :leave', style({
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%'
        })),
        group([
          query(':enter', [
            style({ transform: 'translateX(100%)' }),
            animate('300ms ease-out', style({ transform: 'translateX(0%)' }))
          ]),
          query(':leave', [
            animate('300ms ease-out', style({ transform: 'translateX(-100%)' }))
          ])
        ])
      ])
    ])
  ]
})
export class AppComponent {
  constructor(private router: Router) {}

  isGalleryPage() {
    return this.router.url == "/";
  }

  isListPage() {
    return this.router.url == "/list";
  }

  prepRouteTransition(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation']
  }
}
