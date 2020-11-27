import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Consulta } from 'src/app/Models/consulta';
import { ConsultaService } from 'src/app/services/consulta.service';
import { FirebaseService } from 'src/app/services/firebase.service';
import { UtilService } from 'src/app/services/util.service';
import * as moment from 'moment'
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.page.html',
  styleUrls: ['./create.page.scss'],
  providers: [ConsultaService, UtilService, FirebaseService, StorageService]
})
export class CreatePage implements OnInit {

  private pid: number
  public seguros: string[]
  public consulta: Consulta

  constructor(
    private route: Router,
    private router: ActivatedRoute,
    private service: ConsultaService,
    private plugin: UtilService,
    private _firebase: FirebaseService,
    private storage: StorageService
  ) {
    this.seguros = ["ARS Humano", "Palic Salud", "ARS Univesal"]
    let fecha = Date()
    this.consulta = new Consulta(0, fecha ,"" , "",0, "", "", "")
  }
  
  async ngOnInit() {
    this.pid = parseInt( await this.router.snapshot.paramMap.get('id') )
  }
  
  async handleSubmit(){
    this.plugin.LoadingShow()
    let u = await this.storage.getUsuario()
    let t = await this.storage.getToken()
   this.consulta.PacienteId = this.pid
   this.consulta.Fecha = moment(this.consulta.Fecha).format("YYYY-MM-DD")
   this.service.create(this.consulta, u["Id"], t["access_token"]).subscribe(
     done => {
       this.plugin.LoadingRemove()
       if(done["status"]){
         this.route.navigate(['/consulta-listar'])
       }
       console.log(done)
      },
      err => {
        this.plugin.LoadingRemove()
        this.plugin.alert("Error", "Servidor")
     }
   )
    console.log(this.consulta)

  }
  
}
