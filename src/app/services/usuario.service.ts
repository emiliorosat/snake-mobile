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

  UpdateUser(Usuario: UsuarioClave, token): Observable<any>
  {
    let headers =  new HttpHeaders()
    .set("Content-Type", "application/json")
    .set("token", token)
    return this._http.put(this._url + "users", Usuario, {headers} )
  }

  LoginUser(usuario: UsuarioClave): Observable<any>
  {
    let headers = new HttpHeaders().set("Content-Type", "application/json")
    return this._http.post(this._url + "login", usuario, {headers})
  }

  InfoUser(uid: number, token: string = ""):Observable<any>
  {
    let headers = new HttpHeaders()
    .set("token", token)
    return this._http.get(this._url + `users/${uid}`, {headers})
  }



}
