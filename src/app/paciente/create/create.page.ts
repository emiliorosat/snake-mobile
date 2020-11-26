import { Component, OnInit } from '@angular/core';
import { Paciente } from 'src/app/Models/paciente';
import { PacienteService } from 'src/app/services/paciente.service';
import { StorageService } from 'src/app/services/storage.service';
import * as moment from 'moment'
import { UtilService } from 'src/app/services/util.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.page.html',
  styleUrls: ['./create.page.scss'],
  providers: [PacienteService, StorageService, UtilService]
})
export class CreatePage implements OnInit {
  public name: string
  public last: string
  public document: string
  public email: string
  public sexo: string
  public date: Date
  public blood: string
  public photo: string
  public allergy: string[]
  public allergyList: string[]
  private _usuario: any
  private _token: any

  constructor(
    private service: PacienteService,
    private storage: StorageService,
    private plugin: UtilService,
    private router: Router
  ) { 
    this.allergyList = ["pollo","nuez", "pezcado", "camarones"]
  }

  ngOnInit() {
    this.startupAsync()
  }
  
  async startupAsync(){
    this._usuario = await this.storage.getUsuario()
    this._token = await this.storage.getToken()
  }

  handlePhoto(){
    
  }

  handleSubmit(){
    let id = this._usuario.Id
    let token = this._token["access_token"]
    let formatDateToModel = moment(this.date).format("YYYY-MM-DD")
    let fotoUrl = this.photo == "" || this.photo == null ? "" : this.photo 
    console.log(fotoUrl)
    
    let p = new Paciente(0, id, this.document, fotoUrl, this.name, this.last,
      this.blood, this.email, this.sexo, formatDateToModel, this.allergy, "" )
      this.plugin.LoadingShow()
    this.service.create(p, id, token).subscribe(
      done => {
        this.plugin.LoadingRemove()
        if(done["status"]){
          this.router.navigate(['pacientes-listar'])
        }else{
          this.plugin.alert("Error", done["message"])
        }
      }
    )
    
  }

}
