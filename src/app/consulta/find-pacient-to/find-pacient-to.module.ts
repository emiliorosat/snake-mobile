import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FindPacientToPageRoutingModule } from './find-pacient-to-routing.module';

import { FindPacientToPage } from './find-pacient-to.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FindPacientToPageRoutingModule
  ],
  declarations: [FindPacientToPage]
})
export class FindPacientToPageModule {}
