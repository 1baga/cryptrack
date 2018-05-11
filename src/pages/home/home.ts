import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';

import { AddCoinPage } from '../add-coin/add-coin';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public toastCtrl: ToastController) {
  }

  addPag(){
    this.navCtrl.push(AddCoinPage);
  }

}
