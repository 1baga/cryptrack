import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public toastCtrl: ToastController) {
  }

  addPag(){
    let toast = this.toastCtrl.create({
      message: 'Go to the add page',
      duration: 3000
    });

    toast.present();
  }

}
