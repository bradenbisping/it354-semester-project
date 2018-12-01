import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bbvb-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit
{
  nav: string;

  constructor()
  {
    this.nav = 'home';
  }

  ngOnInit()
  { }

}
