import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MasterComponent } from '../components/master/master.component';
import { HomeComponent } from '../components/home/home.component';
import { ProductsComponent } from '../components/products/products.component';

const routes: Routes = [
  {
    path: '',
    component: MasterComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'products',
        component: ProductsComponent
      },
      {
        path: "**",
        redirectTo: "/login"
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MasterRoutingModule { }
