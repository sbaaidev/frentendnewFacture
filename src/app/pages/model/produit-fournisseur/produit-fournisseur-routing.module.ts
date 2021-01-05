import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProduitFournisseurComponent } from './produit-fournisseur.component';


const routes: Routes = [
  {
    path : '' ,
    component : ProduitFournisseurComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProduitFournisseurRoutingModule { }
