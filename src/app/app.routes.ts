import { Routes } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { CatalogComponent } from './components/catalog/catalog.component';
import { XiaomiPageComponent } from './components/catalog/xiaomi-page/xiaomi-page.component';
import { IphonePageComponent } from './components/catalog/iphone-page/iphone-page.component';
import { OutrosPageComponent } from './components/catalog/outros-page/outros-page.component';
import { AcessoriosPageComponent } from './components/catalog/acessorios-page/acessorios-page.component';

export const routes: Routes = [
  {
    path: '',
    component: HomePageComponent
  },
  {
   path: 'catalog',
   component: CatalogComponent,
   children: [
    {
      path: "xiaomi",
      component: XiaomiPageComponent
    },
    {
      path: "iphone",
      component: IphonePageComponent
    },
    {
      path: "outros",
      component: OutrosPageComponent
    },
    {
      path: "acessorios",
      component: AcessoriosPageComponent
    }
   ] 
  },
];
