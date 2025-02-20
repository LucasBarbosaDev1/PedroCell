import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ContentfulService } from '../../../service/contentful.service';

@Component({
  selector: 'app-outros-page',
  imports: [ RouterLink ],
  templateUrl: './outros-page.component.html',
  styleUrl: './outros-page.component.scss'
})
export class OutrosPageComponent {

    constructor(private contentfulService: ContentfulService) {
      
      this.contentfulService.getData('outros').then(items => {
  
        for (let i = 0; i < items.length; i++) {
          console.log(items[i].fields);
          
          
          
        }
        
      });
          
    }
  
}
