import { Component } from '@angular/core';
import { FooterComponent } from "./components/footer/footer.component";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [
    FooterComponent,
    RouterOutlet
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent {
  title = 'pedro-cell';
}
