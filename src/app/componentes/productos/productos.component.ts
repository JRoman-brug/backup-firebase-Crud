import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth/auth.service';
import { FirestoreService } from 'src/app/services/firestore/firestore.service';

export interface Productos { product: string, precio: number, image: string }
export interface ProductosId { id: string; }

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {


  constructor(private auth:AuthService, private fbs:FirestoreService) { 

  }

  ngOnInit(): void {
    this.auth.authState()
  }

}
