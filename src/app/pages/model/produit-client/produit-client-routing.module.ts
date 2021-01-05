import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProduitClientComponent } from './produit-client.component';


const routes: Routes = [
  {
    path :'',
    component : ProduitClientComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProduitClientRoutingModule { }
