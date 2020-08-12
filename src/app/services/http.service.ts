
import { Injectable } from '@angular/core';
// import { Observable, BehaviorSubject, of } from 'rxjs';
import {utils} from './utils.service'
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class HttpService {

 
  constructor(private http : HttpClient) {
  }
  getCurrExchange() {
  var exchangeRate = utils.loadFromStorage('exchangeRate')  
   if (!exchangeRate) {
   this.http.get('https://blockchain.info/tobtc?currency=USD&value=1').subscribe(rate => {
       utils.storeToStorage('exchangeRate',rate)
       this.getCurrExchange()
    
    } )
   return
   }
   return exchangeRate
  }

}