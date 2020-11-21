import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import Api from '../Models/api';

@Injectable({
  providedIn: 'root'
})
export class ReporteService {
  private _url: string
  
  constructor(
    private _http: HttpClient
  ) {
    this._url = new Api().url
   }

   getByDate(f: string){
    return this._http.get(this._url + `reports/${f}` )
   }

   getByZodiac(){
   // return this.
   }
}
