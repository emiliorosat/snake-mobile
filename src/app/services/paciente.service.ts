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
    this._url = new Api().url + "patients/"
  }

  get(id: number): Observable<any>
  {
    return this._http.get(this._url + `?uid=${id}`)
  }

  getById(id: any): Observable<any>
  {
    return this._http.get(this._url + id)
  }

  create(p: Paciente): Observable<any>
  {
    let headers = new HttpHeaders()
    .set("Content-Type", "application/json")
    return this._http.post(this._url, p, {headers})
  }

  update(p: Paciente, id: number){
    let headers = new HttpHeaders()
    .set("Content-Type", "application/json")
    return this._http.put(this._url + id, p, {headers})
  }

}
