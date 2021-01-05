import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProduitClientRoutingModule } from './produit-client-routing.module';
import { ProduitClientComponent } from './produit-client.component';


@NgModule({
  declarations: [
    ProduitClientComponent,
  ],
  imports: [
    CommonModule,
    ProduitClientRoutingModule
  ]
})
export class ProduitClientModule { }
