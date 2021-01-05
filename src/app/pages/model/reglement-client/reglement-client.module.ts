import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReglementClientRoutingModule } from './reglement-client-routing.module';
import { ReglementClientComponent } from './reglement-client.component';


@NgModule({
  declarations: [
    ReglementClientComponent
  ],
  imports: [
    CommonModule,
    ReglementClientRoutingModule
  ]
})
export class ReglementClientModule { }
