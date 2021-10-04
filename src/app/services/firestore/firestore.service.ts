import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { Product } from 'src/app/componentes/agregar-products/product';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(private fbs:AngularFirestore) { }

  getProducts(): Observable<any>{
    return this.fbs.collection('Productos').snapshotChanges()
  }

  addColletion(producto:any):Promise<any>{
    return this.fbs.collection('Productos').add(producto)
  }


  deletePersonas(id:string): Promise<any>{
    return this.fbs.collection('Productos').doc(id).delete()
  }
}
