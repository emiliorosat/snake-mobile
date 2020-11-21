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
    this._url = new Api().url + "patients/"
  }

  get(): Observable<any> {
    return this._http.get(this._url)
  }

  create(c: Consulta, id: number): Observable<any> {
    let headers = new HttpHeaders()
    .set("Content-Type", "application/json")
    return this._http.post(this._url + id, c, {headers})
  }

  update(c: Consulta, id: number){
    let headers = new HttpHeaders()
    .set("Content-Type", "application/json")
    return this._http.put(this._url + id, c, {headers})
  }

}
