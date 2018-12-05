import { Component, OnInit } from '@angular/core';
import { InventoryService } from '../inventory.service';
import { Item } from 'src/assets/models/item.model';

@Component({
  selector: 'bbvb-merch',
  templateUrl: './merch.component.html',
  styleUrls: ['./merch.component.scss']
})
export class MerchComponent implements OnInit {

  merch: Item[];

  constructor(private data: InventoryService) {
  }

  ngOnInit() {
    this.merch = this.data.inventory;
  }

}
