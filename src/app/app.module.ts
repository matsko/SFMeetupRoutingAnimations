import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SwapDirective } from './swap.directive';
import {BrowserAnimationsModule, NoopAnimationsModule} from "@angular/platform-browser/animations";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import { GalleryPageComponent } from './gallery-page/gallery-page.component';
import { ListPageComponent } from './list-page/list-page.component';

import {ROUTES} from './routes';

@NgModule({
  declarations: [
    AppComponent,
    SwapDirective,
    GalleryPageComponent,
    ListPageComponent
  ],
  imports: [
    RouterModule,
    CommonModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
