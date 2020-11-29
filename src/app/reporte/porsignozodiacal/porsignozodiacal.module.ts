import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PorsignozodiacalPageRoutingModule } from './porsignozodiacal-routing.module';

import { PorsignozodiacalPage } from './porsignozodiacal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PorsignozodiacalPageRoutingModule
  ],
  declarations: [PorsignozodiacalPage]
})
export class PorsignozodiacalPageModule {}
