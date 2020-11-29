import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PorsignozodiacalPage } from './porsignozodiacal.page';

const routes: Routes = [
  {
    path: '',
    component: PorsignozodiacalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PorsignozodiacalPageRoutingModule {}
