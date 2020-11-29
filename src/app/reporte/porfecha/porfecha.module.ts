import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PorfechaPageRoutingModule } from './porfecha-routing.module';

import { PorfechaPage } from './porfecha.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PorfechaPageRoutingModule
  ],
  declarations: [PorfechaPage]
})
export class PorfechaPageModule {}
