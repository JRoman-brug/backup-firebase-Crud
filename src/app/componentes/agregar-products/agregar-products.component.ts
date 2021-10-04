import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FirestoreService } from 'src/app/services/firestore/firestore.service';
import { Product } from './product';

@Component({
  selector: 'app-agregar-products',
  templateUrl: './agregar-products.component.html',
  styleUrls: ['./agregar-products.component.css']
})
export class AgregarProductsComponent implements OnInit {

  title = "Ingresar informacion"
  form: FormGroup
  productId!: string;

  constructor(private fb: FormBuilder, private fbs: FirestoreService, private route: Router, private route2: ActivatedRoute) {
    this.form = this.fb.group({
      producto: ['', Validators.required],
      precio: ['', Validators.required],
      image: ['', Validators.required]
    })


  }

  ngOnInit(): void {
    this.route2.params.subscribe(({ productId }) => {
      this.productId = productId
    })
    if (this.productId) {
      // this.editarProduct(this.productId);
      this.route2.params.subscribe(({ productId }) => {
        this.fbs.getProduct(productId).subscribe(data => {
          this.form.patchValue({
            producto: data.payload.data().product,
            precio: data.payload.data().precio,
            image: data.payload.data().image
          })
        })
      })
    }

  }

  editarAgregarProduct() {
    
  }


  agregarProduct() {
    this.fbs.addColletion(
      {
        product: this.form.value.producto,
        precio: this.form.value.precio,
        image: this.form.value.image,
      }
    );
    this.route.navigate(['productsGrid'])
  }

  editarProduct(id: string) {
    this.fbs.updateProduct(id, {
      product: this.form.value.producto,
      precio: this.form.value.precio,
      image: this.form.value.image,
    })
  }

  submit() {
    this.route.navigate(['productsGrid'])
  }
}
