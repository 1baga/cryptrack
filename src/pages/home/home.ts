import { Component } from '@angular/core';
import { NavController, ToastController, IonicPage } from 'ionic-angular';
import { HoldingsProvider } from '../../providers/holdings/holdings';
import { ImageHelper } from '../../helper/image.helper';


import { AddCoinPage } from '../add-coin/add-coin';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  addPage: any;
  posts: any;

  constructor(private imageHelper: ImageHelper, private holdingsProvider: HoldingsProvider, private navCtrl: NavController, public toastCtrl: ToastController) {
    this.addPage = AddCoinPage;
  }

  ionViewDidLoad() {
    this.holdingsProvider.loadHoldings();
  }

  goToCryptonator(): void {
    window.open('http://www.cryptonator.com/api', '_system');
  }

  refreshPrices(refresher): void {
    this.holdingsProvider.fetchPrices(refresher);
  }

}
