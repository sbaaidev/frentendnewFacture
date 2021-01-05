import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProduitFournisseurRoutingModule } from './produit-fournisseur-routing.module';
import { FactureFournisseurComponent } from '../facture-fournisseur/facture-fournisseur.component';
import { ProduitFournisseurComponent } from './produit-fournisseur.component';


@NgModule({
  declarations: [ProduitFournisseurComponent],
  imports: [
    CommonModule,
    ProduitFournisseurRoutingModule
  ]
})
export class ProduitFournisseurModule { }
