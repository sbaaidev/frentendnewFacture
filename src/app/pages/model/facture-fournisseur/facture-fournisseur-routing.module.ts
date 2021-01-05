import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FactureFournisseurComponent } from './facture-fournisseur.component';


const routes: Routes = [
  {
    path : '',
    component : FactureFournisseurComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FactureFournisseurRoutingModule { }
