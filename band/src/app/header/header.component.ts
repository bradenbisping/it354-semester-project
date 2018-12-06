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
  empty: boolean;

  constructor(private data: InventoryService)
  {

  }

  ngOnInit()
  {
    this.data.isCartEmpty();
    if (this.data.empty)
    {
      this.empty = true;
    }
    else
    {
      this.empty = false;
    }
  }

  increment()
  {
    this.count++;
  }

  decrement()
  {
    this.count--;
  }


}
