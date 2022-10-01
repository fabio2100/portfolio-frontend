import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AcercaDeComponent } from './acerca-de/acerca-de.component';
import { ExperienciaComponent } from './experiencia/experiencia.component';
import { EducacionComponent } from './educacion/educacion.component';
import { HardAndSoftComponent } from './hard-and-soft/hard-and-soft.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { SinContenidoComponent } from './sin-contenido/sin-contenido.component';
import { AcercaDeItemComponent } from './acerca-de-item/acerca-de-item.component';
import { EducacionItemComponent } from './educacion-item/educacion-item.component';
import { ExperienciaItemComponent } from './experiencia-item/experiencia-item.component';
import { HardAndSoftItemComponent } from './hard-and-soft-item/hard-and-soft-item.component';
import { ProyectosItemComponent } from './proyectos-item/proyectos-item.component';
import { ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AcercaDeComponent,
    ExperienciaComponent,
    EducacionComponent,
    HardAndSoftComponent,
    ProyectosComponent,
    SinContenidoComponent,
    AcercaDeItemComponent,
    EducacionItemComponent,
    ExperienciaItemComponent,
    HardAndSoftItemComponent,
    ProyectosItemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
