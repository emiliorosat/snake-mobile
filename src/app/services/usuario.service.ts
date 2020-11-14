import { Injectable } from '@angular/core';
import Api from '../Models/api';
import {UsuarioClave} from '../Models/usuario'
import { Observable } from 'rxjs';
import {HttpHeaders, HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private _url: string

  constructor(
    private _http: HttpClient
    ) { 
    this._url = new Api().url
  }

  CreateUser(nuevoUsuario: UsuarioClave): Observable<any>
  {
    let headers =  new HttpHeaders().set("Content-Type", "application/json")
    return this._http.post(this._url + "createUser", nuevoUsuario, {headers} )
  }

  LoginUser(usuario: UsuarioClave): Observable<any>
  {
    let headers = new HttpHeaders().set("Content-Type", "application/json")
    return this._http.post(this._url + "login", usuario, {headers})
  }

  InfoUser(uid: number):Observable<any>
  {
    let headers = new HttpHeaders()
    return this._http.get(this._url + `info/${uid}`, {headers})
  }



}
