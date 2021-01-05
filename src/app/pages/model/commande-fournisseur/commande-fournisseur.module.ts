import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommandeFournisseurRoutingModule } from './commande-fournisseur-routing.module';
import { CommandeFournisseurComponent } from './commande-fournisseur.component';
import { CommandeFournisseurService } from './commande-fournisseur.service';


@NgModule({
  declarations: [
    CommandeFournisseurComponent,
  ],
  imports: [
    CommonModule,
    CommandeFournisseurRoutingModule
  ],
  providers : [
    CommandeFournisseurService
  ]
})
export class CommandeFournisseurModule { }
