import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { AddCoinPage } from '../pages/add-coin/add-coin';
import { MarketPage } from '../pages/market/market';
import { SharePage } from '../pages/share/share';
import { PromotionPage } from '../pages/promotion/promotion';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    MarketPage,
    AddCoinPage,
    SharePage,
    HomePage,
    TabsPage,
    PromotionPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AddCoinPage,
    SharePage,
    MarketPage,
    HomePage,
    TabsPage,
    PromotionPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
