import { Component, OnInit } from '@angular/core';
import { Usuario, UsuarioClave } from 'src/app/Models/usuario';
import { StorageService } from 'src/app/services/storage.service';
import { UsuarioService } from 'src/app/services/usuario.service';
import { UtilService } from 'src/app/services/util.service';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.page.html',
  styleUrls: ['./update-user.page.scss'],
  providers: [UtilService, UsuarioService, StorageService]
})
export class UpdateUserPage implements OnInit {

  private uid: number
  private usuario: any
  private token: any

  constructor(
    private plugin: UtilService,
    private storage: StorageService
  ) { }

  async ngOnInit() {
    console.clear()
    let u = await this.storage.getUsuario()
    this.uid = u["Id"]
    this.token = await this.storage.getToken()

  }

  handleSubmit(e){
    const nombre = e.target["nombre"].value
    const email = e.target["email"].value
    const clave = e.target["clave"].value
    const confClave = e.target["confirmaclave"].value

    if(clave != confClave ){
      this.plugin.alert("Error", "Claves no coinciden")
    }

    if(clave == null || clave == ""){
    
    }

    let u = new UsuarioClave(nombre, email, clave)
    u["Id"] = this.uid

    console.log(u)
  }

}
