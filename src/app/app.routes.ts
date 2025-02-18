import { Routes } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { CatalogComponent } from './components/catalog/catalog.component';

export const routes: Routes = [
  {
    path: '', component: HomePageComponent
  },
  {
   path: 'catalog', component: CatalogComponent  
  }
];
