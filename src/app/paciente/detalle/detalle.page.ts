import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Paciente } from 'src/app/Models/paciente';
import { PacienteService } from 'src/app/services/paciente.service';
import { UtilService } from 'src/app/services/util.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.page.html',
  styleUrls: ['./detalle.page.scss'],
  providers: [PacienteService, UtilService]
})
export class DetallePage implements OnInit {

  public paciente: Paciente

  constructor(
    private router: ActivatedRoute,
    private service: PacienteService,
    private plugin: UtilService,
    private route: Router
  ) { }

  ngOnInit() {
    let id = this.router.snapshot.paramMap.get('id')
    this.startup(id)
  }
  
  startup(id){
    this.plugin.LoadingShow()
    this.service.getById(id).subscribe(
      done => {
        if(done["status"])
        {
          this.paciente = done["data"][0]
          this.plugin.LoadingRemove()
        }
      }
    )
  }



}
