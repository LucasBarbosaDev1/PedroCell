import { Component } from '@angular/core';
import { HeaderComponent } from "./header/header.component";
import { AboutUsComponent } from "./about-us/about-us.component";
import { CategoriesComponent } from "./categories/categories.component";
import { SocialNetworksComponent } from "./social-networks/social-networks.component";
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-home-page',
  imports: [
    HeaderComponent,
    AboutUsComponent,
    CategoriesComponent,
    SocialNetworksComponent,
    FooterComponent
],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {

}
