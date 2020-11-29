import { Component, OnInit, DoCheck, } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { StorageService } from './services/storage.service';



@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  providers: [StorageService]
})
export class AppComponent {

  public userName : string;
  public selectedIndex = 0;
  public appPages = [
    {
      Category: "Pacientes",
      pages: [
        {
          title: 'Lista de Pacientes',
          url: 'pacientes-listar',
          icon: 'list'
        },
        {
          title: 'Agregar Paciente',
          url: 'pacientes-create',
          icon: 'add'
        },
      ]
    },
    {
      Category: "Consultas",
      pages: [
        {
          title: 'Lista de Consultas',
          url: 'consulta-listar',
          icon: 'list'
        },
        {
          title: 'Agregar Consulta',
          url: 'find-pacient-to',
          icon: 'add'
        },
      ]
    },
    {
      Category: "Reportes",
      pages: [
        {
          title: 'Por Fecha',
          url: 'porfecha',
          icon: 'calendar'
        },
        {
          title: 'Signo Zodiacal',
          url: 'porsignozodiacal',
          icon: 'telescope'
        },
        {
          title: 'Visitas',
          url: 'porvisitas',
          icon: 'walk'
        },
      ]
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private storage: StorageService
  ) {
    this.initializeApp();
    this.userName = ""
  }

  async ionViewDidEnter(){
    try{
      let u = await this.storage.getUsuario()
      if(u != null){
        this.userName = u["Nombre"]
      }

    }catch(e){ console.log(e)    }
  }
  
 

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
