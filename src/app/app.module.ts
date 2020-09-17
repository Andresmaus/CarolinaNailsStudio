import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TitulosComponent } from './titulos/titulos.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { HelpComponent } from './help/help.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { RegistroUComponent } from './registro-u/registro-u.component';
import { SesionComponent } from './sesion/sesion.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { IniciousuarioComponent } from './iniciousuario/iniciousuario.component';
import { RecuperarpassComponent } from './recuperarpass/recuperarpass.component';

@NgModule({
  declarations: [
    AppComponent,
    TitulosComponent,
    HomeComponent,
    LoginComponent,
    HelpComponent,
    UsuarioComponent,
    RegistroUComponent,
    SesionComponent,
    DashboardComponent,
    IniciousuarioComponent,
    RecuperarpassComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
