import { Component, OnInit } from '@angular/core';
import { FirestoreService } from 'src/app/services/firestore/firestore.service';
import { Product } from '../agregar-products/product';

@Component({
  selector: 'app-products-grid',
  templateUrl: './products-grid.component.html',
  styleUrls: ['./products-grid.component.css']
})
export class ProductsGridComponent implements OnInit {

  products!: Product[];

  constructor(private fbs: FirestoreService) { }

  ngOnInit(): void {
    this.obtenerColeccion();
  }

  obtenerColeccion(){
    this.fbs.getProducts().subscribe((data:any) => {
      this.products = [];
      data.forEach((element: any) => {
        this.products.push({
          id:element.payload.doc.id,
          ...element.payload.doc.data()
        })
      });
    })
  }

  eliminarProduct(id: string) {
    this.fbs.deletePersonas(id)
      .then(() => {
        console.log("salio todo piola")
      })
      .catch(e => {
        console.log(e)
      })
  }

  editarProduct(){
    
  }
}
