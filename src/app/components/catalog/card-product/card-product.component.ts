import { Component, Input } from '@angular/core';

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
}
