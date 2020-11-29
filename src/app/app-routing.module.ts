import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  
  {
    path: 'login',
    loadChildren: () => import('./usuario/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./usuario/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'pacientes-listar',
    loadChildren: () => import('./paciente/listar/listar.module').then( m => m.ListarPageModule)
  },
  {
    path: 'pacientes-detalle/:id',
    loadChildren: () => import('./paciente/detalle/detalle.module').then( m => m.DetallePageModule)
  },
  {
    path: 'pacientes-create',
    loadChildren: () => import('./paciente/create/create.module').then( m => m.CreatePageModule)
  },
  {
    path: 'consulta-create/:id',
    loadChildren: () => import('./consulta/create/create.module').then( m => m.CreatePageModule)
  },
  {
    path: 'consulta-listar',
    loadChildren: () => import('./consulta/listar/listar.module').then( m => m.ListarPageModule)
  },
  {
    path: 'logout',
    loadChildren: () => import('./usuario/logout/logout.module').then( m => m.LogoutPageModule)
  },
  {
    path: 'find-pacient-to',
    loadChildren: () => import('./consulta/find-pacient-to/find-pacient-to.module').then( m => m.FindPacientToPageModule)
  },
  {
    path: 'manager',
    loadChildren: () => import('./usuario/manager/manager.module').then( m => m.ManagerPageModule)
  },
  {
    path: 'update-user',
    loadChildren: () => import('./usuario/update-user/update-user.module').then( m => m.UpdateUserPageModule)
  },
  {
    path: 'porfecha',
    loadChildren: () => import('./reporte/porfecha/porfecha.module').then( m => m.PorfechaPageModule)
  },
  {
    path: 'porvisitas',
    loadChildren: () => import('./reporte/porvisitas/porvisitas.module').then( m => m.PorvisitasPageModule)
  },
  {
    path: 'porsignozodiacal',
    loadChildren: () => import('./reporte/porsignozodiacal/porsignozodiacal.module').then( m => m.PorsignozodiacalPageModule)
  },
  {
    path: 'detalleconsulta/:id',
    loadChildren: () => import('./consulta/detalleconsulta/detalleconsulta.module').then( m => m.DetalleconsultaPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
