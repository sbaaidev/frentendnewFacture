import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReglementFournisseurRoutingModule } from './reglement-fournisseur-routing.module';
import { ReglementFournisseurComponent } from './reglement-fournisseur.component';


@NgModule({
  declarations: [
    ReglementFournisseurComponent
  ],
  imports: [
    CommonModule,
    ReglementFournisseurRoutingModule
  ]
})
export class ReglementFournisseurModule { }
