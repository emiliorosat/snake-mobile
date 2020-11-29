import { Injectable } from '@angular/core';
//import firebase from 'firebase';
import {AngularFireStorage} from '@angular/fire/storage'

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(
    private storage: AngularFireStorage
  ) { 
  }

  async uploadFile(file: any, format: string, name: string = null){

      let randomName = name ?? Math.random().toString(36).substring(2);
      let storageRef = this.storage.ref(`app/${randomName}.${format}`).putString(file, 'base64')

      return await storageRef.then(snapshot => snapshot.ref.getDownloadURL().then(url => url))   
  }

  async uploadFileInput(file: any)
  {
    let storageRef = this.storage.ref(`app/${file.name}`).put(file)
    return await storageRef.then(up => up.ref.getDownloadURL().then(url => url))
  }
}
