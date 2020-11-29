import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';



@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],

})
export class AppComponent implements OnInit {

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

  ) {
    this.initializeApp();
    this.userName = "Emilio"
  }

  async ionViewWillEnter(){

  }
  ngOnInit(): void {
    
  }

 

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
