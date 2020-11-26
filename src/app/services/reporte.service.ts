import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { url } from 'inspector';
import Api from '../Models/api';

@Injectable({
  providedIn: 'root'
})
export class ReporteService {
  private _url: string
  
  constructor(
    private _http: HttpClient
  ) {
    this._url = new Api().url + "reports"
   }

   getByDate(f: string, uid: number = 0, token: string = "", date: string = null){
    let url = `?uid=${uid}&opcion=${f}`
    if(date != null)
    {
      url += `&fecha=${date}`
    }
    let headers =  new HttpHeaders()
    .set("token", token)
    return this._http.get(this._url + `/${f}` + `?uid=${uid}` , {headers})
   }


}
