import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class StockInfoService {

  constructor(private _http: HttpClient) { }

  currentStockInformation(symbol: String) {
  	var link = "https://api.iextrading.com/1.0/stock/" + symbol + "/chart/1d";
   return this._http.get(link).pipe(map(result => result));
  }
}
