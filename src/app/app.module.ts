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

@NgModule({
  declarations: [
    AppComponent,
    TitulosComponent,
    HomeComponent,
    LoginComponent,
    HelpComponent,
    UsuarioComponent,
    RegistroUComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
