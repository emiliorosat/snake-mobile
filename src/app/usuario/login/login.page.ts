import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/services/storage.service';
import { UsuarioService } from 'src/app/services/usuario.service';
import { UtilService } from 'src/app/services/util.service';
import {UsuarioClave} from '../../Models/usuario'

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  providers: [UsuarioService, StorageService, UtilService]
})
export class LoginPage implements OnInit {

  public email:string
  public password:string

  constructor(
    private uS: UsuarioService,
    private sS: StorageService,
    private utilS: UtilService
  ) { }

  async ngOnInit() 
  {
    let t = await this.sS.getToken()
    if(t != null){

      console.log(t)
    }

  }

  handleSubmit()
  {
    this.utilS.LoadingShow()
    let u = new UsuarioClave("", this.email, this.password)
    this.uS.LoginUser(u).subscribe(
      done=>{
        if(done["status"]){
          this.sS.saveToken(done["Token"])
          this.sS.saveUsuario(done["Usuario"])
        }else{
          this.utilS.alert("Error", done["message"])
        }
        this.utilS.LoadingRemove()
      }, 
      err=>{
        console.log(err)
        this.utilS.LoadingRemove()
      }
    )

  }

}
