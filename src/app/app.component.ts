import { Component } from '@angular/core';
import { Router, RouterOutlet} from '@angular/router';
import { trigger, animation, useAnimation, group, transition, animate, style, query } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['app.component.css'],
  animations: [
    trigger('routeAnimation', [
      transition('listPage => galleryPage', []),
      transition('galleryPage => listPage', [])
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
