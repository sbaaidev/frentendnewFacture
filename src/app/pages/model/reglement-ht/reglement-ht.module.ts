import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReglementHTRoutingModule } from './reglement-ht-routing.module';
import { ReglementHTComponent } from './reglement-ht.component';


@NgModule({
  declarations: [
    ReglementHTComponent
  ],
  imports: [
    CommonModule,
    ReglementHTRoutingModule
  ]
})
export class ReglementHTModule { }
