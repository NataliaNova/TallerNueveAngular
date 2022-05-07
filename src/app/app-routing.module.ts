import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { CalculadoraComponent } from './componentes/calculadora/calculadora.component';
import { FormularioComponent } from './componentes/formulario/formulario.component';
import { DateComponent } from './componentes/date/date.component';



const routes: Routes = [
  {path:'Inicio', component:InicioComponent },
  {path:'', component:InicioComponent },
  {path:'Calculadora',component:CalculadoraComponent},
  {path:'Formulario',component:FormularioComponent },
  {path:'Date',component:DateComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
