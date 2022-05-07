import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent implements OnInit {
  titulo="Mi calculadora"
num1!:number;
num2!:number;
resultado!:number;

mensaje_ok:any;
mensaje_error:any;
mensaje_menos:any;

  constructor() { }

  ngOnInit(): void {
  }

  sumar(){
if (this.num1==null){
  this.mensaje_error="Espera, te falta un número"
}
else if
  (this.num2==null){
  this.mensaje_error="Espera, te falta un número"

}
else{
  this.resultado=this.num1+this.num2
this.mensaje_ok="Todo salío bien"
}

}

restar(){
if (this.num1==null){
  this.mensaje_error="Espera, te falta un número"
}
else if
  (this.num2==null){
  this.mensaje_error="Espera, te falta un número"

}
else if
  ((this.num2 |this.num1)<0) {
  this.mensaje_menos="No <0"

}
else{
  this.resultado=this.num1-this.num2
this.mensaje_ok="Todo salió bien"
}

}

multiplicar(){
if (this.num1==null){
  this.mensaje_error="Espera, te falta un número"
}
else if
  (this.num2==null){
  this.mensaje_error="Espera, te falta un número"

}
else{
  this.resultado=this.num1*this.num2
this.mensaje_ok="Todo salió bien"
}

}

dividir(){
if (this.num1==null){
  this.mensaje_error="Espera, te falta un número"
}
else if
  (this.num2==null){
  this.mensaje_error="Espera, te falta un número"

}
else if
  ((this.num2 |this.num1)<0) {
  this.mensaje_menos="No <0"

}
else{
  this.resultado=this.num1/this.num2
this.mensaje_ok="Todo salió bien"
}

}
}
