import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';


export interface Productos { product: string, precio: number, image: string }
export interface ProductosId { id: string; }

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  private productosCollection: AngularFirestoreCollection<Productos>;
  private productos: Observable<ProductosId[]>;

  constructor(private fbs: AngularFirestore) {

    this.productosCollection = fbs.collection<Productos>('Productos');

    this.productos = this.productosCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Productos;
        const id = a.payload.doc.id;
        return { id, data };
      }))
    );
  }




  getProducts():Observable<any> {
    return this.productos
  }

  addColletion(producto: any): Promise<any> {
    return this.fbs.collection('Productos').add(producto)
  }
  getProduct(id: string): Observable<any> {
    return this.fbs.collection('Productos').doc(id).snapshotChanges()
  }
  updateProduct(id: string, product: any) {
    this.fbs.collection('Productos').doc(id).update(product);
  }
  deletePersonas(id: string): Promise<any> {
    return this.fbs.collection('Productos').doc(id).delete()
  }
}
