import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root',
})
export class EmpleadoService {
  constructor(private firestore: AngularFirestore) {}

  agregarEmpleado(empleado: any): Promise<any> {
    return this.firestore.collection('empleados').add(empleado);
  }
  getEmpleado(): Observable<any> {
    return this.firestore
      .collection('empleados', (ref) => ref.orderBy('fechaCreacion', 'asc'))
      .snapshotChanges();
  }
  eliminarEmpleado(id: string): Promise<any> {
    return this.firestore.collection('empleados').doc(id).delete();
  }

  getEmpleadoById(id: string): Observable<any> {
    return this.firestore.collection('empleados').doc(id).snapshotChanges();
  }

  actualizarEmpleado(id:string, data:any):Promise<any>{
    return this.firestore.collection('empleados').doc(id).update(data);
  } 
}
