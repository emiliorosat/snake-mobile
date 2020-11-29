import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-manager',
  templateUrl: './manager.page.html',
  styleUrls: ['./manager.page.scss'],
})
export class ManagerPage  {

  public nombre: string = ""

  constructor(
    private storage: StorageService
  ) { }

  async ionViewWillEnter(){

      let u = await this.storage.getUsuario()
      if(u != null){
        this.nombre = u["Nombre"]
      }


  }

}
