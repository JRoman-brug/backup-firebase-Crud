import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarProductsComponent } from './componentes/agregar-products/agregar-products.component';
import { LoginComponent } from './componentes/login/login.component';
import { ProductosComponent } from './componentes/productos/productos.component';
import { RegisterComponent } from './componentes/register/register.component';
import { MenuComponent } from './shared/menu/menu.component';

const routes: Routes = [
  {
    path:"menu",component:MenuComponent
  },
  {
    path:"productos",component:ProductosComponent
  },
  {
    path:"addProducts",component:AgregarProductsComponent
  },
  {
    path:"editarProducts/:productId",component:AgregarProductsComponent
  },
  {
    path:"login",component:LoginComponent
  },
  {
    path:"register",component:RegisterComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
