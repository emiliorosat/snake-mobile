import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PorfechaPage } from './porfecha.page';

const routes: Routes = [
  {
    path: '',
    component: PorfechaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PorfechaPageRoutingModule {}
