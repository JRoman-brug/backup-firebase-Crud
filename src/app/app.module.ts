import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { AngularFireModule } from '@angular/fire/compat';
import { environment } from '../environments/environment';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MyFilterPipe } from './filter.pipe';
import { MenuComponent } from './shared/menu/menu.component';
import { ProductsGridComponent } from './componentes/products-grid/products-grid.component';
import { AgregarProductsComponent } from './componentes/agregar-products/agregar-products.component';


@NgModule({
  declarations: [
    AppComponent,
    MyFilterPipe,
    MenuComponent,
    ProductsGridComponent,
    AgregarProductsComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
