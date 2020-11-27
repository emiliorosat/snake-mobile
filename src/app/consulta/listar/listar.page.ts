import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Consulta } from 'src/app/Models/consulta';
import { ConsultaService } from 'src/app/services/consulta.service';
import { StorageService } from 'src/app/services/storage.service';
import { UtilService } from 'src/app/services/util.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.page.html',
  styleUrls: ['./listar.page.scss'],
  providers: [StorageService, ConsultaService, UtilService]
})
export class ListarPage implements OnInit {

  public consultas: Consulta[]
  public dataConsultas: Consulta[]
  private usuario: any
  private _token: any

  constructor(
    private storage: StorageService,
    private service: ConsultaService,
    private router: Router,
    public plugin: UtilService
  ) { }

  async ngOnInit() {
    this.usuario = await this.storage.getUsuario()
    this._token = await this.storage.getToken()
    this.getConsultas()
  }

  async getConsultas(){
    this.plugin.LoadingShow()
    let uid = this.usuario["Id"]
    let token = this._token["access_token"]
    this.service.get(uid, token).subscribe(
      done => {
        this.plugin.LoadingRemove()
        if(done["status"]){
          this.consultas = done["data"]
          this.dataConsultas = done["data"]
        }
        console.log(done["data"])
      }
    )
  }

  handleSearch(e){
     let search = e.detail.value
    if(search != ""){
      let re = new RegExp(search, "i")
      this.consultas = this.dataConsultas.filter(f => re.test( `${f["Nombre"]} ${f["Apellido"]}` ) )
    }else{
      this.consultas = this.dataConsultas
    }
  }

}
