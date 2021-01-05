import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReglementFournisseurComponent } from './reglement-fournisseur.component';


const routes: Routes = [
  {
    path :'',
    component : ReglementFournisseurComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReglementFournisseurRoutingModule { }
