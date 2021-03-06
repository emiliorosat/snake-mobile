import { Component, OnInit } from '@angular/core';
import { ReporteService } from 'src/app/services/reporte.service';
import { StorageService } from 'src/app/services/storage.service';
import { UtilService } from 'src/app/services/util.service';

@Component({
  selector: 'app-porsignozodiacal',
  templateUrl: './porsignozodiacal.page.html',
  styleUrls: ['./porsignozodiacal.page.scss'],
  providers: [UtilService, ReporteService, StorageService]

})
export class PorsignozodiacalPage implements OnInit {

  public reporte: any

  constructor(
    private plugin: UtilService,
    private storage: StorageService,
    private service: ReporteService
  ) { }

   async ngOnInit() {
     console.clear()
     const token = await this.storage.getToken()
     const user = await this.storage.getUsuario()
     this.plugin.LoadingShow()
     this.service.getReports(2, user["Id"], token["access_token"])
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
