import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PorvisitasPage } from './porvisitas.page';

const routes: Routes = [
  {
    path: '',
    component: PorvisitasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PorvisitasPageRoutingModule {}
