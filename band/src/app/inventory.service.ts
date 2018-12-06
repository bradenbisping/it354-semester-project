import { Injectable } from '@angular/core';
import { Item } from '../assets/models/item.model';

@Injectable({
  providedIn: 'root'
})
export class InventoryService {

  inventory: Item[] = new Array(14);
  sum: number;
  empty: boolean;

  constructor() {
    this.inventory[0] = {
      id: 0,
      name: '"Braden Bisping\'s Virtual Band" CD',
      price: 12.99,
      quantity: 0,
      description: 'The debut album from Braden Bisping\'s Virtual Band on CD!',
      photo: '../../../assets/images/0.png'
    };
    this.inventory[1] = {
      id: 1,
      name: '"Braden Bisping\'s Virtual Band" Vinyl',
      price: 25.99,
      quantity: 0,
      description: 'The debut album from Braden Bisping\'s Virtual Band on vinyl!',
      photo: '../../../assets/images/1.png'
    };
    this.inventory[2] = {
      id: 2,
      name: 'Virtual Boiz T-Shirt',
      price: 15.99,
      quantity: 0,
      description: 'Virtual Boiz logo white unisex short-sleeved t-shirt',
      photo: '../../../assets/images/2.png'
    };
    this.inventory[3] = {
      id: 3,
      name: 'Little Robot Long-Sleeved Pocketed Shirt',
      price: 22.99,
      quantity: 0,
      description: 'Little Robot logo gray unisex long-sleeved pocketed shirt',
      photo: '../../../assets/images/3.png'
    };
    this.inventory[4] = {
      id: 4,
      name: 'Hackerman Hoodie',
      price: 29.99,
      quantity: 0,
      description: 'Hackerman binary matrix black and green unisex hoodie',
      photo: '../../../assets/images/4.png'
    };
    this.inventory[5] = {
      id: 5,
      name: 'Little Robot Sweater',
      price: 35.99,
      quantity: 0,
      description: 'Little Robot logo black unisex sweater',
      photo: '../../../assets/images/5.png'
    };
    this.inventory[6] = {
      id: 6,
      name: 'Lttle Robot Hat',
      price: 17.99,
      quantity: 0,
      description: 'Little robot logo black unisex baseball hat',
      photo: '../../../assets/images/6.png'
    },
    this.inventory[7] = {
      id: 7,
      name: '"Virutal Boiz" CD',
      price: 12.99,
      quantity: 0,
      description: 'The sophomore album from Braden Bisping\'s Virtual Band on CD!',
      photo: '../../../assets/images/7.png'
    },
    this.inventory[8] = {
      id: 8,
      name: '"Virtual Boiz" Vinyl',
      price: 25.99,
      quantity: 0,
      description: 'The sophomore album from Braden Bisping\'s Virtual Band on vinyl!',
      photo: '../../../assets/images/8.png'
    },
    this.inventory[9] = {
      id: 9,
      name: 'BBVB Album T-Shirt',
      price: 15.99,
      quantity: 0,
      description: 'BBVB album white unisex short-sleeved t-shirt',
      photo: '../../../assets/images/9.png'
    },
    this.inventory[10] = {
      id: 10,
      name: 'Virtual Boiz Long-Sleeved Shirt',
      price: 22.99,
      quantity: 0,
      description: 'Virtual Boyz logo black unisex long-sleeved shirt',
      photo: '../../../assets/images/10.png'
    },
    this.inventory[11] = {
      id: 11,
      name: 'Slackerman Hoodie',
      price: 29.99,
      quantity: 0,
      description: 'Slackerman Zs grey unisex hoodie',
      photo: '../../../assets/images/11.png'
    },
    this.inventory[12] = {
      id: 12,
      name: 'VB Album Sweater',
      price: 35.99,
      quantity: 0,
      description: 'VB album yellow unisex sweater',
      photo: '../../../assets/images/12.png'
    },
    this.inventory[13] = {
      id: 13,
      name: 'Virtual Boiz Hat',
      price: 17.99,
      quantity: 0,
      description: 'Virtual Boiz logo black unisex baseball hat',
      photo: '../../../assets/images/13.png'
    };

    // this.sum = 0;
    // this.empty = true;
  }

  addItem(id: number)
  {
    this.inventory[id].quantity++;
  }

  removeItem(id: number)
  {
    this.inventory[id].quantity--;
  }

  totalPricePlusTax()
  {
    for (const item of this.inventory)
    {
      this.sum += item.price;
    }
    this.sum = (this.sum * .0875) + this.sum;
  }

  clear()
  {
    for (const item of this.inventory)
    {
      item.quantity = 0;
    }
  }

  isCartEmpty()
  {
    for (const item of this.inventory)
    {
      if (item.quantity !== 0)
      {
        this.empty = false;
        break;
      }
      else
      {
        this.empty = true;
      }
    }
  }
}
