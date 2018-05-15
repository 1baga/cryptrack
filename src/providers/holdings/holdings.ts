import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Observable } from 'rxjs/Observable';
import { forkJoin } from 'rxjs/observable/forkJoin';
import { apiUrl } from '../../app/app.constant';

interface Holding {
  crypto: string,
  currency: string,
  amount: number,
  value?: number
}

@Injectable()
export class HoldingsProvider {

  public holdings: Holding[] = [];

  constructor(private http: HttpClient, private storage: Storage) {
    
  }

  get(endpoint: string, params?: any, reqOpts?: any) {
    if (!reqOpts) {
      reqOpts = {
        params: new HttpParams()
      };
    }

    // Support easy query params for GET requests
    if (params) {
      reqOpts.params = new HttpParams();
      for (let k in params) {
        reqOpts.params.set(k, params[k]);
      }
    }

    return this.http.get(apiUrl + '/' + endpoint, reqOpts);
  }

  addHolding(holding: Holding): void {
    this.holdings.push(holding);
    this.fetchPrices();
    this.saveHoldings();
  }

  removeHolding(holding): void {
    this.holdings.splice(this.holdings.indexOf(holding), 1);
    this.fetchPrices();
    this.saveHoldings();
  }

  saveHoldings(): void {
    this.storage.set('cryptoAsset', this.holdings);
  }

  loadHoldings(): void {
    this.storage.get('cryptoAsset').then(holdings => {
      if(holdings !== null){
        this.holdings = holdings;
        this.fetchPrices();
      }
    });
  }

  verifyHolding(holding): Observable<any> {
    return this.http.get('https://api.cryptonator.com/api/ticker/' + holding.crypto + '-' + holding.currency);
  }

  fetchAll(): Promise<ArrayBuffer> {
    return this.get('ticker/?limit=20').toPromise();
  }

  fetchPrices(refresher?): void {
    let requests = [];

    for(let holding of this.holdings){
      let request = this.http.get('https://api.cryptonator.com/api/ticker/' + holding.crypto + '-' + holding.currency);
 
      requests.push(request);
    }

    forkJoin(requests).subscribe(results => {
      results.forEach((result: any, index) => {
        this.holdings[index].value = result.ticker.price;
      });

      if (typeof(refresher) !== 'undefined') {
        refresher.complete();
      }

      this.saveHoldings();

    }, err => {

      if(typeof(refresher) !== 'undefined'){
        refresher.complete();
      }

    });

  }

}
