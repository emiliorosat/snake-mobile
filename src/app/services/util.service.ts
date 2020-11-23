import { Injectable } from '@angular/core';
import { AlertController, LoadingController  } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class UtilService {
  private loading: any
  private pross: boolean = false

  constructor(
    private loadingController : LoadingController,
    private AlertController: AlertController,
  ) {}
  
  private async startupAsync(){
    this.loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Espere...',
      duration: 1000 * 60 * 2
    })
    
  }

  LoadingShow = async () =>{
    this.pross = true
      this.startupAsync().then(async ()=> {
        this.pross = false
        await this.loading.present()
      }
      )
  } 
  LoadingRemove = () => {
    if(!this.pross){
      this.loading.remove()
    }else{
      setTimeout(()=>this.LoadingRemove(), 100)
      console.log("en proceso")
    }
  }

  async alert(header, message, buttons = ['Aceptar'])
  {
    let alert = await this.AlertController.create({
      cssClass: 'my-custom-class',
      header, message, buttons
    })
    await alert.present()
  }
}
