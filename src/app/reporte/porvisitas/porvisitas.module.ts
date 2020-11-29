import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PorvisitasPageRoutingModule } from './porvisitas-routing.module';

import { PorvisitasPage } from './porvisitas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PorvisitasPageRoutingModule
  ],
  declarations: [PorvisitasPage]
})
export class PorvisitasPageModule {}
