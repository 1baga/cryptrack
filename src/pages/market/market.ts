import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';
import { HoldingsProvider } from '../../providers/holdings/holdings';
import { ImageHelper } from '../../helper/image.helper';

@Component({
  selector: 'page-market',
  templateUrl: 'market.html',
})
export class MarketPage {

  private coinList: any = [];
  private loading: any;

  constructor(
    private loadingctrl: LoadingController,
    private holdingsProvider: HoldingsProvider,
    public navCtrl: NavController,
    public navParams: NavParams,
    private imageHelper: ImageHelper
  ) {
    this.loadCoin();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MarketPage');
  }

  private getPriceColor(price: number): string {
    switch (Math.sign(price)) {
      case 1:
        return 'price-up';
      case -1:
        return 'price-down';
      case 0:
        return 'price-no-change';
      default:
        return 'price-no-change';
    }
  }

  private initLoading(){
    this.loading = this.loadingctrl.create({
      content: 'Please wait...'
    });
  }

  private async loadCoin(refresher?) {
    this.initLoading();
    await this.loading.present();
    this.coinList = await this.holdingsProvider.fetchAll();
    if (refresher) refresher.complete();
    this.loading.dismiss();
    //console.log(this.coinList);
  }

}
