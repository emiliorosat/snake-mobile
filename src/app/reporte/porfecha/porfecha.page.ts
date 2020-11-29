import { Component, OnInit } from '@angular/core';
import { ReporteService } from 'src/app/services/reporte.service';
import { StorageService } from 'src/app/services/storage.service';
import { UtilService } from 'src/app/services/util.service';
import * as moment from 'moment'

@Component({
  selector: 'app-porfecha',
  templateUrl: './porfecha.page.html',
  styleUrls: ['./porfecha.page.scss'],
  providers: [UtilService, ReporteService, StorageService]

})
export class PorfechaPage implements OnInit {

public reporte: any
private token: any
private user: any

  constructor(
    private plugin: UtilService,
    private storage: StorageService,
    private service: ReporteService
  ) { }

  async ngOnInit() {
    this.token = await this.storage.getToken()
    this.user = await this.storage.getUsuario()
  }

  handleChange(e){
    let fecha = moment(e.target.value).format("YYYY-MM-DD") 
    
    this.plugin.LoadingShow()
    this.service.getReports(1, this.user["Id"], this.token["access_token"], fecha)
     .subscribe(
       done =>{
         this.plugin.LoadingRemove()
         console.log(done)
         if(done["status"]){
           this.reporte = done["data"]
         }
       },
       err => {
         this.plugin.LoadingRemove()
         console.error(err.message)
       }
     )
  }

}
