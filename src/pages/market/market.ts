import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { HoldingsProvider } from '../../providers/holdings/holdings';
import { ImageHelper } from '../../helper/image.helper';

@IonicPage()
@Component({
  selector: 'page-market',
  templateUrl: 'market.html',
})
export class MarketPage {

  private coinList: any = [];
  private coinListFiltered: any = [];
  private searchText: string;
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
    this.coinListFiltered = this.coinList;
    if (refresher) refresher.complete();
    this.loading.dismiss();
    console.log(this.coinList);
  }

  private filterCoins(val: any) {
    return function(coin: any) {
      return (
        coin.name.toLowerCase().indexOf(val.toLowerCase()) > -1 ||
        coin.symbol.toLowerCase().indexOf(val.toLowerCase()) > -1
      );
    };
  }

  private onInputSearch(ev: any) {
    if (this.coinList) {
      this.coinListFiltered = this.coinList;
      let val = ev.target.value;
      if (val && val.trim() !== '') {
        this.coinListFiltered = this.coinList.filter(this.filterCoins(val));
      }
    }
  }

}
