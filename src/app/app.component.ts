import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { trigger, animation, useAnimation, group, transition, animate, style, query } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['app.component.css'],
  animations: []
})
export class AppComponent {
  constructor(private router: Router) {}

  isGalleryPage() {
    return this.router.url == "/";
  }

  isListPage() {
    return this.router.url == "/list";
  }
}
