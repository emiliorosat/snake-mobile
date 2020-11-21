import { Injectable } from '@angular/core';
import { AlertController, LoadingController  } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class UtilService {
  private loading: any

  constructor(
    private loadingController : LoadingController,
    private AlertController: AlertController,
  ) {
   }

  private async startupAsync(){
    this.loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Espere...',
      duration: 1000 * 60 * 2
    })
    
  }

  LoadingShow = async () =>{
      this.startupAsync().then(async ()=> 
        await this.loading.present()
      )
  } 
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
