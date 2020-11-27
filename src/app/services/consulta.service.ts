import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import Api from '../Models/api';
import { Consulta } from '../Models/consulta';

@Injectable({
  providedIn: 'root'
})
export class ConsultaService {
  private _url: string

  constructor(
    private _http: HttpClient
  ) { 
    this._url = new Api().url + "consults"
  }

  get(uid: number = 0, token: string = ""): Observable<any> {
    let headers =  new HttpHeaders()
    .set("token", token)
    return this._http.get(this._url + `?uid=${uid}`, {headers})
  }

  create(c: Consulta, uid: number = 0, token: string = ""): Observable<any> {
    let headers = new HttpHeaders()
    .set("Content-Type", "application/json")
    .set("token", token)
    return this._http.post(this._url + `?uid=${uid}`, c, {headers})
  }

  update(c: Consulta, id: number, uid: number = 0, token: string = ""){
    let headers = new HttpHeaders()
    .set("Content-Type", "application/json")
    .set("token", token)
    return this._http.put(this._url + id + `?uid=${uid}`, c, {headers})
  }

}
