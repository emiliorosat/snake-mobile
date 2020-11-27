import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FindPacientToPage } from './find-pacient-to.page';

const routes: Routes = [
  {
    path: '',
    component: FindPacientToPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FindPacientToPageRoutingModule {}
