import { Component, OnInit } from '@angular/core';
import { Item } from '../../../assets/models/item.model';
import { InventoryService } from '../../inventory.service';
import { templateJitUrl } from '@angular/compiler';

@Component({
  selector: 'bbvb-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  cart: Item[];
  sum: number;

  constructor(private data: InventoryService) {
    // this.cart = data.inventory;
    // this.sum = data.sum;
  }

  ngOnInit() { }

  totalPricePlusTax()
  {
    this.data.totalPricePlusTax();
    this.sum = this.data.sum;
  }

  addItem(id: number)
  {
    this.data.addItem(id);
    this.cart = this.data.inventory;
  }

  removeItem(id: number)
  {
    this.data.removeItem(id);
    this.cart = this.data.inventory;
  }

  clear()
  {
    this.data.clear();
    this.cart = this.data.inventory;
  }
}
