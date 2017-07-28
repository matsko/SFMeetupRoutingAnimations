import {GalleryPageComponent} from './gallery-page/gallery-page.component';
import {ListPageComponent} from './list-page/list-page.component';

export const ROUTES = [
  {path:'', component: GalleryPageComponent, data: {animation: 'galleryPage'}},
  {path:'list', component: ListPageComponent, data: {animation: 'listPage'}},
]
