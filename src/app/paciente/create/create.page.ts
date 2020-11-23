import { Component, OnInit } from '@angular/core';
import { Paciente } from 'src/app/Models/paciente';
import { PacienteService } from 'src/app/services/paciente.service';
import { StorageService } from 'src/app/services/storage.service';
import * as moment from 'moment'

@Component({
  selector: 'app-create',
  templateUrl: './create.page.html',
  styleUrls: ['./create.page.scss'],
  providers: [PacienteService, StorageService]
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
  private usuario: any

  constructor(
    private service: PacienteService,
    private storage: StorageService
  ) { 
    this.allergyList = ["pollo","nuez", "pezcado", "camarones"]
  }

  ngOnInit() {
    this.startupAsync()
  }
  
  async startupAsync(){
    this.usuario = await this.storage.getUsuario()
  }

  handlePhoto(){
    
  }

  handleSubmit(){
    let id = this.usuario.Id
    let formatDateToModel = moment(this.date).format("YYYY-MM-DD")
    let fotoUrl = this.photo == "" || this.photo == null ? "" : this.photo 
    console.log(fotoUrl)
    
    let p = new Paciente(0, 17, this.document, fotoUrl, this.name, this.last,
      this.blood, this.email, this.sexo, formatDateToModel, this.allergy, fotoUrl )

    this.service.create(p).subscribe(
      done => {
        console.log(done)
      }
    )
    
  }

}
