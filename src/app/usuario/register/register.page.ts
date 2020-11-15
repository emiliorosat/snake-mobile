import { Component } from '@angular/core';
import { StorageService } from 'src/app/services/storage.service';
import { UsuarioService } from 'src/app/services/usuario.service';
import {UsuarioClave} from '../../Models/usuario'
import { UtilService } from 'src/app/services/util.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
  providers: [UsuarioService, StorageService, UtilService]
})
export class RegisterPage {

  public email:string
  public name:string
  public password:string
  public rePassword:string

  constructor(
    private uS: UsuarioService,
    private sS: StorageService,
    private utilServ : UtilService,
  ) { }

  async handleSubmit()
  {
    this.utilServ.LoadingShow()

    if(this.rePassword === this.password){
      let u = new UsuarioClave(this.name, this.email, this.password)
      this.uS.CreateUser(u).subscribe(
        done => {
          console.log(done)
          if(done["status"]){
            this.sS.saveToken(done["Token"])
            this.sS.saveUsuario(done["Usuario"])
          }else{
            this.utilServ.alert("Error", done["message"])
          }
          this.utilServ.LoadingRemove()
        }, 
        err => {
          this.utilServ.LoadingRemove()
          this.utilServ.alert("Error", "Error al crear usuario")
          console.error(err)
        }
      )
    }else{
      this.utilServ.LoadingRemove()
      this.utilServ.alert("Error", "Contraseñas No Coinciden")
    }
  }

  


}
