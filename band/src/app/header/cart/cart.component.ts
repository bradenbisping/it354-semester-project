import { Component, OnInit, DoCheck } from '@angular/core';
import { Item } from '../../../assets/models/item.model';
import { InventoryService } from '../../inventory.service';
import { templateJitUrl } from '@angular/compiler';

@Component({
  selector: 'bbvb-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit, DoCheck {

  cart: Item[];
  sum: number;

  fullCart: Item[];

  constructor(private data: InventoryService) { }

  ngOnInit() { }

  ngDoCheck() {
    this.cart = this.data.findInventory();
    this.fullCart = this.data.findCart();
    this.sum = this.data.findSum();
  }

  totalPricePlusTax()
  {
    this.sum = this.data.findSum();
  }

  removeItem(id: number)
  {
    this.data.removeItem(id);
    this.cart = this.data.findInventory();
    this.fullCart = this.data.findCart();
    this.sum = this.data.findSum();
  }

  clear()
  {
    this.data.clear();
    this.cart = this.data.findInventory();
    this.fullCart = this.data.findCart();
    this.sum = this.data.findSum();
  }
}
