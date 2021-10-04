import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
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

  constructor(private fb: FormBuilder, private fbs: FirestoreService, private route: Router) {
    this.form = this.fb.group({
      producto: ['', Validators.required],
      precio: ['', Validators.required],
      image: ['', Validators.required]
    })
  }

  ngOnInit(): void {
  }
  enviar() {
    this.fbs.addColletion(
      {
        product: this.form.value.producto,
        precio: this.form.value.precio,
        image: this.form.value.image,
      }
    );
    this.route.navigate(['productsGrid'])
    // wacho usa esto https://angular.io/start/start-routing
  }
}
