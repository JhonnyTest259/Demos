import { Component, OnInit } from '@angular/core';
import { EmpleadoService } from 'src/app/services/empleado.service';

@Component({
  selector: 'app-list-empleados',
  templateUrl: './list-empleados.component.html',
  styleUrls: ['./list-empleados.component.css'],
})
export class ListEmpleadosComponent implements OnInit {
  empleados: any[] = [];
  constructor(private _empleadoService: EmpleadoService) {}

  ngOnInit(): void {
    this.getEmpleado(); 
  }

  getEmpleado() {
    this._empleadoService.getEmpleado().subscribe((data) => {
      this.empleados = [];
      data.map((data:any) => {
        /* console.log(data.payload.doc.data()); */
        this.empleados.push({
          id: data.payload.doc.id,
          ...data.payload.doc.data()
        })
      })
    });
  }

  eliminarEmpleado(id: string){
    this._empleadoService.eliminarEmpleado(id).then(() => {
      console.log('Empleado eliminado con exito')
    }).catch(error => {
      console.log(error);
    })
  } 
}
