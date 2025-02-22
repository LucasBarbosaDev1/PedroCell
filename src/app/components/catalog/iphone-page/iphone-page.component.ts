import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ContentfulService } from '../../../service/contentful.service';
import { CardProductComponent } from "../card-product/card-product.component";

@Component({
  selector: 'app-iphone-page',
  imports: [RouterLink, CardProductComponent],
  templateUrl: './iphone-page.component.html',
  styleUrl: './iphone-page.component.scss'
})
export class IphonePageComponent {
    
  arr: any[] = [];
  colorBtn: string = '#2B2B2B';
  
  constructor(private contentfulService: ContentfulService) {
    
    this.contentfulService.getData('iphone').then(items => {
      
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
