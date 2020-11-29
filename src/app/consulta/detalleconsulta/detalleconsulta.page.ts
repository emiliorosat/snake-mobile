import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Consulta } from 'src/app/Models/consulta';
import { ConsultaService } from 'src/app/services/consulta.service';
import { StorageService } from 'src/app/services/storage.service';
import { UtilService } from 'src/app/services/util.service';
import { Plugins } from '@capacitor/core';

const { Browser } = Plugins;

@Component({
  selector: 'app-detalleconsulta',
  templateUrl: './detalleconsulta.page.html',
  styleUrls: ['./detalleconsulta.page.scss'],
  providers: [UtilService, StorageService, ConsultaService]
})
export class DetalleconsultaPage implements OnInit {

  public consulta: Consulta

  constructor(
    private router: ActivatedRoute,
    private service: ConsultaService,
    private plugin: UtilService,
    private route: Router,
    private storage: StorageService
  ) { 
    this.consulta = new Consulta(0, "", "", "", 0, "", "", "")
  }

  ngOnInit(  ) {
    let id = this.router.snapshot.paramMap.get('id')
    this.startup(id)
  }

  async startup(id){
    let u = await this.storage.getUsuario()
    let t = await this.storage.getToken()
    this.plugin.LoadingShow()
    this.service.getById(id, u["Id"], t["access_token"]).subscribe(
      done => {
        if(done["status"])
        {
          console.log(done["data"][0])
          this.consulta = done["data"][0]
          this.plugin.LoadingRemove()
        }
      }
    )
  }

  async startDownload(uri){
    await Browser.open({ url: uri });
  }

}
