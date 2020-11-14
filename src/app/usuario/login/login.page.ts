import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/services/storage.service';
import { UsuarioService } from 'src/app/services/usuario.service';
import {UsuarioClave} from '../../Models/usuario'

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  providers: [UsuarioService, StorageService]
})
export class LoginPage implements OnInit {

  public email:string
  public password:string

  constructor(
    private uS: UsuarioService,
    private sS: StorageService
  ) { }

  async ngOnInit() {
    let t = await this.sS.getToken()
    console.log(t)
  }

  handleSubmit(){
    let u = new UsuarioClave("", this.email, this.password)
    console.log(u)
    this.uS.LoginUser(u).subscribe(
      done=>{
        console.log(done)
      }, 
      err=>{
        console.log(err)
      }
    )

  }

}
