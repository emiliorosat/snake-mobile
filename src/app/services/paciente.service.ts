import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import Api from '../Models/api';
import { Paciente } from '../Models/paciente';

@Injectable({
  providedIn: 'root'
})
export class PacienteService {
  private _url: string
  
  constructor(
    private _http: HttpClient
  ) { 
    this._url = new Api().url + "patients"
  }

  get(uid: number = 0, token: string = ""): Observable<any>
  {
    let headers =  new HttpHeaders()
    .set("token", token)
    return this._http.get(this._url + `?uid=${uid}`, {headers})
  }

  getById(id: any, uid: number = 0, token: string = ""): Observable<any>
  {
    let headers =  new HttpHeaders()
    .set("token", token)
    return this._http.get(this._url + `/${id}?uid=${uid}`, {headers})
  }

  create(p: Paciente, uid: number = 0, token: string = ""): Observable<any>
  {
    let headers =  new HttpHeaders()
    .set("Content-Type", "application/json")
    .set("token", token)
    return this._http.post(this._url  + `?uid=${uid}`, p, {headers})
  }
  
  update(p: Paciente, uid: number = 0, token: string = ""){
    let headers = new HttpHeaders()
    .set("Content-Type", "application/json")
    .set("token", token)
    return this._http.put(this._url  + `?uid=${uid}`, p, {headers})
  }

}
