import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FactureFournisseurRoutingModule } from './facture-fournisseur-routing.module';
import { FactureFournisseurComponent } from './facture-fournisseur.component';
import { FactureFoursnisseurService } from './facture-foursnisseur.service';


@NgModule({
  declarations: [
    FactureFournisseurComponent,
  ],
  imports: [
    CommonModule,
    FactureFournisseurRoutingModule
  ],
  providers: [FactureFoursnisseurService]
})
export class FactureFournisseurModule { }
