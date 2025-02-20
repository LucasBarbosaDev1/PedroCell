import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ContentfulService } from '../../../service/contentful.service';

@Component({
  selector: 'app-xiaomi-page',
  imports: [ RouterLink ],
  templateUrl: './xiaomi-page.component.html',
  styleUrl: './xiaomi-page.component.scss'
})
export class XiaomiPageComponent {
  
  constructor(private contentfulService: ContentfulService) {
    
    this.contentfulService.getData('xiaomi').then(items => {

      for (let i = 0; i < items.length; i++) {
        console.log(items[i].fields);
        
        
        
      }
      
    });
        
  }

}
