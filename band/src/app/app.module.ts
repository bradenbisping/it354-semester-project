import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { MerchComponent } from './merch/merch.component';
import { MusicComponent } from './music/music.component';
import { NewsComponent } from './news/news.component';
import { MerchDetailComponent } from './merch/merch-detail/merch-detail.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CartComponent } from './header/cart/cart.component';

import { InventoryService } from './inventory.service';
import { PaypalComponent } from './header/cart/paypal/paypal.component';

const appRoutes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    data: { title: 'Home' }
  },
  { path: 'news',
    component: NewsComponent,
    data: { title: 'News'}
  },
  { path: 'music',
    component: MusicComponent,
    data: { title: 'Music' }
  },
  { path: 'merch',
    component: MerchComponent,
    data: { title: 'Merch' }
  },
  { path: 'merch/:id',
    component: MerchDetailComponent,
    data: {
      title: 'Item #{{ id }}',
      id: '{{ id }}'
    }
  },
  { path: 'cart',
    component: CartComponent,
    data: { title: 'Cart' }
  },
  { path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  { path: '**',
    component: PageNotFoundComponent,
    data: { title: 'Page Not Found' }
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    MerchComponent,
    MusicComponent,
    NewsComponent,
    MerchDetailComponent,
    PageNotFoundComponent,
    CartComponent,
    PaypalComponent
  ],
  imports:
  [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatCardModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    )
  ],
  providers: [InventoryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
