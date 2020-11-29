import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetalleconsultaPage } from './detalleconsulta.page';

const routes: Routes = [
  {
    path: '',
    component: DetalleconsultaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetalleconsultaPageRoutingModule {}
