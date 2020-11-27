import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Paciente } from 'src/app/Models/paciente';
import { PacienteService } from 'src/app/services/paciente.service';
import { StorageService } from 'src/app/services/storage.service';
import { UtilService } from 'src/app/services/util.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.page.html',
  styleUrls: ['./listar.page.scss'],
  providers: [StorageService, PacienteService, UtilService]
})
export class ListarPage {
  public pacientes: Paciente[]
  public dataPacientes: Paciente[]
  public usuario: any
  private search: string
  private _token: any

  constructor(
    private storage: StorageService,
    private service: PacienteService,
    private router: Router,
    public plugin: UtilService
  ) {

   }

  async ionViewWillEnter(){
    console.clear()
    this.startup()
  }
  
  async startup(){
    this.usuario = await this.storage.getUsuario()
    this._token = await this.storage.getToken()
    this.getPacientes()
  }
  
  handleSearch(e){
    this.search = e.detail.value
    if(this.search != ""){
      let re = new RegExp(this.search, "i")
      this.pacientes = this.dataPacientes.filter(f => re.test( `${f.Nombre} ${f.Apellido}` ) )
    }else{
      this.pacientes = this.dataPacientes
    }
  }
  
  async getPacientes(){
    this.plugin.LoadingShow()
    let uid = this.usuario.Id
    let token = this._token["access_token"]

    this.service.get(uid, token).subscribe(
      done => {
        if (done["status"]){
          this.pacientes = done["data"]
          this.dataPacientes = done["data"]
        }
        this.plugin.LoadingRemove()
      },
      err => {
        console.error(err["message"])
        this.plugin.LoadingRemove()
      }
    )
  }

  goPacienteDetails(id){
    this.router.navigate(['pacientes-detalle/', id])
  }

  goCreate(){
    this.router.navigate(['pacientes-create/'])
  }

}
