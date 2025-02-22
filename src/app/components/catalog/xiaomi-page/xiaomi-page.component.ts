import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ContentfulService } from '../../../service/contentful.service';
import { CardProductComponent } from "../card-product/card-product.component";

@Component({
  selector: 'app-xiaomi-page',
  imports: [RouterLink, CardProductComponent],
  templateUrl: './xiaomi-page.component.html',
  styleUrl: './xiaomi-page.component.scss'
})
export class XiaomiPageComponent {

  arr: any[] = [];
  colorBtn: string = '#FF6900';
  
  constructor(private contentfulService: ContentfulService) {
    
    this.contentfulService.getData('xiaomi').then(items => {

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
