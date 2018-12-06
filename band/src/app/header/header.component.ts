import { Component, OnInit, DoCheck } from '@angular/core';
import { InventoryService } from '../inventory.service';

@Component({
  selector: 'bbvb-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, DoCheck
{
  count: number;

  constructor(private data: InventoryService) { }

  ngOnInit() { }

  ngDoCheck() {
    this.count = this.data.findCount();
  }
}
