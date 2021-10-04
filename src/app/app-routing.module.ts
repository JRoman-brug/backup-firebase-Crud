import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarProductsComponent } from './componentes/agregar-products/agregar-products.component';
import { ProductsGridComponent } from './componentes/products-grid/products-grid.component';
import { MenuComponent } from './shared/menu/menu.component';

const routes: Routes = [
  {
    path:"menu",component:MenuComponent
  },
  {
    path:"productsGrid",component:ProductsGridComponent
  },
  {
    path:"addProducts",component:AgregarProductsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
