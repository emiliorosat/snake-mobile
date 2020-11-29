import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetalleconsultaPageRoutingModule } from './detalleconsulta-routing.module';

import { DetalleconsultaPage } from './detalleconsulta.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetalleconsultaPageRoutingModule
  ],
  declarations: [DetalleconsultaPage]
})
export class DetalleconsultaPageModule {}
