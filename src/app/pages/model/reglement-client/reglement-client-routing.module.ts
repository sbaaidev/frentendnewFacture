import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProduitFournisseurComponent } from '../produit-fournisseur/produit-fournisseur.component';
import { ReglementClientComponent } from './reglement-client.component';


const routes: Routes = [
  {
    path:'',
    component : ReglementClientComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReglementClientRoutingModule { }
