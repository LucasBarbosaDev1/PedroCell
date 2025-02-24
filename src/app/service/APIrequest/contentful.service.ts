import { Injectable } from '@angular/core';
import { createClient } from 'contentful';

@Injectable({
  providedIn: 'root'
})
export class ContentfulService {

  private client = createClient({
    space: 'w5u1atc8gayu',
    environment: 'master',
    accessToken: 'yVxbCfbi3FlM07WLM9hTeMg52RtB6MEEh3nkiXOys1c'
  })
  
  async getData(type: string): Promise<any[]> {
    try {
      const resp = await this.client.getEntries();
      const listProducts = resp.items;

      const filter = listProducts.filter(item => item.fields['type'] === `${type}`);      
      
      return filter; 

    } catch (error) {
      console.error(error)
      return []
    }
  }

  constructor() { 

  }  
  
};
