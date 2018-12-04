import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bbvb-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit
{
  count: 0;

  constructor()
  {

  }

  increment()
  {
    this.count++;
  }

  decrement()
  {
    this.count--;
  }

  ngOnInit()
  { }

}
