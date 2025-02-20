import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ContentfulService } from '../../../service/contentful.service';

@Component({
  selector: 'app-iphone-page',
  imports: [ RouterLink ],
  templateUrl: './iphone-page.component.html',
  styleUrl: './iphone-page.component.scss'
})
export class IphonePageComponent {

  constructor(private contentfulService: ContentfulService) {
    
    this.contentfulService.getData('iphone').then(items => {

      for (let i = 0; i < items.length; i++) {
        console.log(items[i].fields);
        
        
        
      }
      
    });
        
  }

}
