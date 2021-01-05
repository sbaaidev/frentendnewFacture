import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FournisseurRoutingModule } from './fournisseur-routing.module';
import { FournisseurComponent } from './fournisseur.component';


@NgModule({
  declarations: [
    FournisseurComponent,
  ],
  imports: [
    CommonModule,
    FournisseurRoutingModule
  ],
  providers: []
})
export class FournisseurModule { }
