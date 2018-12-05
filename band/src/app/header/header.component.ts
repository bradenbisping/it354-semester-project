import { Component, OnInit } from '@angular/core';
import { InventoryService } from '../inventory.service';

@Component({
  selector: 'bbvb-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit
{
  count: number;
  empty: string;

  constructor(private data: InventoryService)
  {
    // data.isCartEmpty();
    // if (data.empty)
    // {
    //   this.empty = 'disabled';
    // }
    // else
    // {
    //   this.empty = 'active';
    // }
  }

  ngOnInit()
  { }

  increment()
  {
    this.count++;
  }

  decrement()
  {
    this.count--;
  }


}
