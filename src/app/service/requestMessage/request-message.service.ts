import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RequestMessageService {

  constructor() {

  }

  requestMessage(product: string){
    return `Olá, me interessei pelo produto ${product}`;
  
  };
};
