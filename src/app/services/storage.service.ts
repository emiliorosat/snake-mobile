import { Injectable } from '@angular/core';
import { Plugins } from '@capacitor/core'
const { Storage } = Plugins;

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  saveToken = async (token) =>
    await Storage.set({ key: "token", value: JSON.stringify(token) })
  
  async getToken(){

    let v = await Storage.get({key: "token"})
    return JSON.parse(v.value) 
  }

  saveUsuario = async (u) =>
    await Storage.set({key: "Usuario_info", value: JSON.stringify(u)})
  
  async getUsuario(){

    let u = await Storage.get({key: "Usuario_info"})
    return JSON.parse(u.value) 
  }
  

}
