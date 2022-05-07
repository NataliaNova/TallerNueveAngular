import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.css']
})
export class DateComponent implements OnInit {
  mensaje_select:any;





  constructor() { }

  ngOnInit(): void {


}
seleccionar(){
        this.mensaje_select=" Tu cita ha sido agendada"
      }
}
