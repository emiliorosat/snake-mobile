import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/services/storage.service';
import { UsuarioService } from 'src/app/services/usuario.service';
import { UtilService } from 'src/app/services/util.service';
import {UsuarioClave} from '../../Models/usuario'
import {Router} from '@angular/router'

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
    private utilS: UtilService,
    private _router: Router
  ) { }

  async ngOnInit() 
  {
    let t = await this.sS.getToken()
    if(t != null){
      let u = await this.sS.getUsuario()
      this.utilS.LoadingShow()
      this.uS.InfoUser(u["Id"], t["access_token"]).subscribe(
        done => {
          this.utilS.LoadingRemove()
          if(done["status"]){
            this._router.navigate(["/pacientes-listar"])
          }else{
            this._router.navigate(["logout"])
          }
        },
        err => {
          this.utilS.LoadingRemove()
        }
      )
    }

  }

  handleSubmit()
  {
    this.utilS.LoadingShow()
    let u = new UsuarioClave("", this.email, this.password)
    this.uS.LoginUser(u).subscribe(
      done=>{
        console.log(done, "Prueba")
        if(done["status"]){
          this.sS.saveToken(done["Token"])
          this.sS.saveUsuario(done["Usuario"])
          this._router.navigate(["/pacientes-listar"])
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
