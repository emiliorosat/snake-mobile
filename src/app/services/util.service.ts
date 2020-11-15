import { Injectable } from '@angular/core';
import { async } from '@angular/core/testing';
import { AlertController, LoadingController  } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class UtilService {
  private loading: any

  constructor(
    public loadingController : LoadingController,
    public AlertController: AlertController,
  ) {
    this.startupAsync()  
   }

  private async startupAsync(){
    this.loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Please wait...',
      duration: 1000 * 60 * 5
    })
  }

  LoadingShow = async () => await this.loading.present()
  LoadingRemove = () => this.loading.remove()

  async alert(header, message, buttons = ['Aceptar'])
  {
    let alert = await this.AlertController.create({
      cssClass: 'my-custom-class',
      header, message, buttons
    })
    await alert.present()
  }

}
