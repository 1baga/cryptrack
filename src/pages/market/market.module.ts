import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MarketPage } from './market';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    MarketPage,
  ],
  imports: [
    IonicPageModule.forChild(MarketPage), ComponentsModule
  ],
})
export class MarketPageModule {}
