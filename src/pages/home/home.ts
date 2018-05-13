import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { AddCoinPage } from '../add-coin/add-coin';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  addPage: any;
  posts: any;

  constructor(public http: Http, public navCtrl: NavController, public toastCtrl: ToastController) {
    this.addPage = AddCoinPage;
  }

  ionViewDidLoad() {
    this.posts = null;
    this.http.get('https://api.coinmarketcap.com/v2/ticker/?limit=10')
    .map(res => res.json())
    .subscribe(data => {
      this.posts = data.data;
      Object.keys(this.posts).forEach(function(key){
        console.log("Key: ", key, " Value: ", data.data[key].name, " Price: $", data.data[key].quotes.USD.price);
      })
  });
  }

}
