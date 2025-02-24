import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ContentfulService } from '../../../service/APIrequest/contentful.service';
import { CardProductComponent } from "../card-product/card-product.component";

@Component({
  selector: 'app-outros-page',
  imports: [RouterLink, CardProductComponent],
  templateUrl: './outros-page.component.html',
  styleUrl: './outros-page.component.scss'
})
export class OutrosPageComponent {

  arr: any[] = [];
  colorBtn: string = '#FEBE00';

    constructor(private contentfulService: ContentfulService) {
      
      this.contentfulService.getData('outros').then(items => {
  
        for (let i = 0; i < items.length; i++) {
          this.arr.push({
            product: items[i].fields.product,
            description: `${items[i].fields.description.replace(/\n/g, "<br>")}`,
            price: items[i].fields.price,
            imageProduct: items[i].fields.imageProduct.fields.file.url
          });
          
        };
        
      });
          
    };

};
