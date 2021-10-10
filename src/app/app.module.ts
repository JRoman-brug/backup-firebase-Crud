import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Firebase
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from '../environments/environment';
// Auth Firebase
import { AngularFireAuthModule } from '@angular/fire/compat/auth';

 

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MyFilterPipe } from './filter.pipe';
import { MenuComponent } from './shared/menu/menu.component';
import { AgregarProductsComponent } from './componentes/agregar-products/agregar-products.component';
import { LoginComponent } from './componentes/login/login.component';
import { RegisterComponent } from './componentes/register/register.component';
import { ProductosComponent } from './componentes/productos/productos.component';


@NgModule({
  declarations: [
    AppComponent,
    MyFilterPipe,
    MenuComponent,
    AgregarProductsComponent,
    LoginComponent,
    RegisterComponent,
    ProductosComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
