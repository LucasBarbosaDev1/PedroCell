import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ContentfulService } from '../../../service/contentful.service';

@Component({
  selector: 'app-acessorios-page',
  imports: [ RouterLink ],
  templateUrl: './acessorios-page.component.html',
  styleUrl: './acessorios-page.component.scss'
})
export class AcessoriosPageComponent {

    constructor(private contentfulService: ContentfulService) {
      
      this.contentfulService.getData('acessorios').then(items => {
  
        for (let i = 0; i < items.length; i++) {
          console.log(items[i].fields);
          
          
          
        }
        
      });
          
    }
  
}
