import { Component, OnInit } from '@angular/core';
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
export class ListarPage implements OnInit {
  public pacientes: Paciente[]
  public dataPacientes: Paciente[]
  public usuario: any
  private search: string

  constructor(
    private storage: StorageService,
    private service: PacienteService,
    private router: Router,
    public plugin: UtilService
  ) {

   }

  ngOnInit() {
    console.clear()
    this.startup()
  }
  
  async startup(){
    this.usuario = await this.storage.getUsuario()
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
    let uid = this.usuario.Id
    this.service.get(0).subscribe(
      done => {
        if (done["status"]){
          this.pacientes = done["data"]
          this.dataPacientes = done["data"]
        }
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
