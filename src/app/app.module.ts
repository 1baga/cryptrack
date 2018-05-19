import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { HttpClientModule } from '@angular/common/http';
import { IonicStorageModule } from '@ionic/storage';
import { MyApp } from './app.component';

import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
//import { AddCoinPage } from '../pages/add-coin/add-coin';
import { MarketPage } from '../pages/market/market';
import { SharePage } from '../pages/share/share';
import { PromoPage } from '../pages/promo/promo';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HoldingsProvider } from '../providers/holdings/holdings';

import { ImageHelper } from '../helper/image.helper';

@NgModule({
  declarations: [
    MyApp,
    MarketPage,
    SharePage,
    HomePage,
    PromoPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp, {
      preloadModules: true
    }),
    HttpClientModule,
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    SharePage,
    MarketPage,
    HomePage,
    PromoPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    ImageHelper,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    HoldingsProvider,
  ]
})
export class AppModule {}
