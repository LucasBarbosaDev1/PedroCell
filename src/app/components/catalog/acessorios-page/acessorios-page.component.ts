import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ContentfulService } from '../../../service/APIrequest/contentful.service';
import { CardProductComponent } from "../card-product/card-product.component";

@Component({
  selector: 'app-acessorios-page',
  imports: [RouterLink, CardProductComponent],
  templateUrl: './acessorios-page.component.html',
  styleUrl: './acessorios-page.component.scss'
})
export class AcessoriosPageComponent {
  
  arr: any[] = [];
  colorBtn: string = '#24B0E8';

  constructor(private contentfulService: ContentfulService) {
    
    this.contentfulService.getData('acessorios').then(items => {

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

}
