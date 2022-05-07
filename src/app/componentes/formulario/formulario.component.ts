import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  nombres!: string;
  apellidos!:string;
  ciudad!:string;
  edad!:string;

  mensaje_falta:any;
  mensaje_donacion:any

  constructor() { }

  ngOnInit(): void {

  }
  enviar(){
      if(this.nombres==null){
        this.mensaje_falta="¡ALTO! Debes diligenciar el campo nombres    "
      }
      else if(this.apellidos==null){
        this.mensaje_falta="¡ALTO! Debes diligenciar el campo apellidos    "
      }
      else if(this.ciudad==null){
        this.mensaje_falta="¡ALTO! Debes diligenciar el campo ciudad    "
      }
      else if(this.edad==null){
        this.mensaje_falta="¡ALTO! Debes diligenciar el campo edad       "
      }
      else {
                this.mensaje_donacion="Tu donación ha sido recibida ¡Muchas gracias!   "
      }


    }


}
