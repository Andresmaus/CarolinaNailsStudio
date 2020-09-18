import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HelpComponent } from './help/help.component';
import { HomeComponent } from './home/home.component';
import { IniciousuarioComponent } from './iniciousuario/iniciousuario.component';
import { LoginComponent } from './login/login.component';
import { NovedadesComponent } from './novedades/novedades.component';
import { PromocionesComponent } from './promociones/promociones.component';
import { RecuperarpassComponent } from './recuperarpass/recuperarpass.component';
import { RegistroUComponent } from './registro-u/registro-u.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { SesionComponent } from './sesion/sesion.component';
import { UsuarioComponent } from './usuario/usuario.component';

const routes: Routes = [
  
  {
    path: '',
    component: SesionComponent,
    children: [
      {
        path: '',
        component: HomeComponent,
      },
      {
        path: 'login',
        component: LoginComponent,
      },
      {
        path: 'recuperarpass',
        component: RecuperarpassComponent,
      },
      {
        path: 'help',
        component: HelpComponent,
      },
      {
        path: 'registroU',
        component: RegistroUComponent,
      }
    ]
  },
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: 'usuario',
        component: UsuarioComponent,
      },
      {
        path: 'iniciousuario',
        component: IniciousuarioComponent,
      },
      {
        path: 'novedades',
        component: NovedadesComponent,
      },
      {
        path: 'servicios',
        component: ServiciosComponent,
      },
      {
        path: 'promociones',
        component: PromocionesComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
