import { Component, Input } from '@angular/core';
import { RequestMessageService } from '../../../service/requestMessage/request-message.service';

@Component({
  selector: 'app-card-product',
  imports: [],
  templateUrl: './card-product.component.html',
  styleUrl: './card-product.component.scss'
})
export class CardProductComponent {
  
  @Input() product!: string;
  @Input() description!: string;
  @Input() price!: number;
  @Input() imageProduct!: string;
  @Input() colorBtn!: string;

  constructor( private message: RequestMessageService){
    
  };

  messageWhatsapp(product:string) {
    window.open(`https://api.whatsapp.com/send?phone=5585987692718&text=Ol%C3%A1%20PedroCell%F0%9F%A4%97,%20Me%20interessei%20pelo%20produto%20*${product}*`, '_blank');
  };

};
