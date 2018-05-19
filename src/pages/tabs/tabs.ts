import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { MarketPage } from '../market/market';
import { SharePage } from '../share/share';
import { PromoPage } from '../promo/promo';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = MarketPage;
  tab3Root = SharePage;
  tab4Root = PromoPage;

  constructor() {

  }
}
