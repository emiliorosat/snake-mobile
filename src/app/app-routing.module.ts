import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  
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
    path: 'consulta-create',
    loadChildren: () => import('./consulta/create/create.module').then( m => m.CreatePageModule)
  },
  {
    path: 'consulta-listar',
    loadChildren: () => import('./consulta/listar/listar.module').then( m => m.ListarPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
