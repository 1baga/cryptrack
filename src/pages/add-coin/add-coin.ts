import { Component } from '@angular/core';
import { IonicPage, NavController} from 'ionic-angular';
import { HoldingsProvider } from '../../providers/holdings/holdings';

@IonicPage({
  defaultHistory: ['HomePage']
})
@Component({
  selector: 'page-add-coin',
  templateUrl: 'add-coin.html',
})
export class AddCoinPage {

  private cryptoUnavailable: boolean = false;
  private checkingValidity: boolean = false;
  private cryptoCode: string;
  private displayCurrency: string;
  private amountHolding;

  constructor(private holdingsProvider: HoldingsProvider, private navCtrl: NavController) {
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddCoinPage');
  }

  addHolding(): void {
 
    this.cryptoUnavailable = false;
    this.checkingValidity = true;

    let holding = {
        crypto: this.cryptoCode,
        currency: this.displayCurrency,
        amount: this.amountHolding || 0
    };

    this.holdingsProvider.verifyHolding(holding).subscribe((result) => {

        this.checkingValidity = false;

        if(result.success){
            this.holdingsProvider.addHolding(holding);
            this.navCtrl.pop();
        } else {
            this.cryptoUnavailable = true;
        }

    }, (err) => {   

      this.checkingValidity = false;

    });

  }

}
