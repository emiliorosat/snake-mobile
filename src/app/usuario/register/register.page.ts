import { Component } from '@angular/core';
import { StorageService } from 'src/app/services/storage.service';
import { UsuarioService } from 'src/app/services/usuario.service';
import { AlertController, LoadingController  } from '@ionic/angular';
import {UsuarioClave} from '../../Models/usuario'

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
  providers: [UsuarioService, StorageService]
})
export class RegisterPage {

  public email:string
  public name:string
  public password:string
  public rePassword:string

  constructor(
    private uS: UsuarioService,
    private sS: StorageService,
    public IonAlert: AlertController,
    public loading : LoadingController,
  ) { }

  async handleSubmit()
  {
    const loading = await this.loading.create({
      cssClass: 'my-custom-class',
      message: 'Please wait...',
      duration: 5000
    });
    await loading.present();

    if(this.rePassword === this.password){
      let u = new UsuarioClave(this.name, this.email, this.password)
      this.uS.CreateUser(u).subscribe(
        done => {
          console.log(done)
          loading.remove()
        }, 
        err => {
          loading.remove()
          this.showAlert("Error", "Error al crear usuario")
          console.error(err)
        }
      )
    }else{
      this.showAlert("Error", "Contraseñas No Coinciden")
      loading.remove()
    }
  }

  async showAlert(header, message){
    let alert = await this.IonAlert.create({
      cssClass: 'my-custom-class',
      header: header,
      message: message,
      buttons: ['Aceptar']
    })
    await alert.present()
  }


}
