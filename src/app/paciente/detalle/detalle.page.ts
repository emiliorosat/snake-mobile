import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Paciente } from 'src/app/Models/paciente';
import { PacienteService } from 'src/app/services/paciente.service';
import { StorageService } from 'src/app/services/storage.service';
import { UtilService } from 'src/app/services/util.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.page.html',
  styleUrls: ['./detalle.page.scss'],
  providers: [PacienteService, UtilService, StorageService]
})
export class DetallePage implements OnInit {

  public paciente: Paciente

  constructor(
    private router: ActivatedRoute,
    private service: PacienteService,
    private plugin: UtilService,
    private route: Router,
    private storage: StorageService
  ) { }

  ngOnInit() {
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
          this.paciente = done["data"][0]
          this.plugin.LoadingRemove()
        }
      }
    )
  }

  nextCreateConsult(id){
    this.route.navigate(['consulta-create', id])
  }



}
