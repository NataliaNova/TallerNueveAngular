import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BarraComponent } from './componentes/barra/barra.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { FormularioComponent } from './componentes/formulario/formulario.component';
import { DateComponent } from './componentes/date/date.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import {MatCardModule} from '@angular/material/card';
import { CalculadoraComponent } from './componentes/calculadora/calculadora.component';
import { FormsModule,ReactiveFormsModule } from
'@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';


//swetAlert
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';


@NgModule({
  declarations: [
    AppComponent,
    BarraComponent,
    InicioComponent,
    FormularioComponent,
    DateComponent,
    CalculadoraComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule,
    SweetAlert2Module,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule






  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
