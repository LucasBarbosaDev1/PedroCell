import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./components/Home/header/header.component";
import { AboutUsComponent } from "./components/Home/about-us/about-us.component";
import { CatalogComponent } from "./components/Home/categories/catalog.component";
import { SocialNetworksComponent } from "./components/Home/social-networks/social-networks.component";
import { FooterComponent } from "./components/footer/footer.component";

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, AboutUsComponent, CatalogComponent, SocialNetworksComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'pedro-cell';
}
