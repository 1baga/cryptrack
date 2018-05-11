import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';

/**
 * Generated class for the AddCoinPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-coin',
  templateUrl: 'add-coin.html',
})
export class AddCoinPage {

  newAsset: string = '';

  constructor(public toastCtrl: ToastController, public navCtrl: NavController, public navParams: NavParams) {
  }
  
  dot(){
    let toast = this.toastCtrl.create({
      message: this.newAsset,
      duration: 3000
    });

    toast.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddCoinPage');
  }

}
