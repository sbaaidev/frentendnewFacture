import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommandeFournisseurComponent } from './commande-fournisseur.component';


const routes: Routes = [
  {
    path :'',
    component : CommandeFournisseurComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CommandeFournisseurRoutingModule { }
