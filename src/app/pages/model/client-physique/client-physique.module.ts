import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientPhysiqueRoutingModule } from './client-physique-routing.module';
import { ClientPhysiqueComponent } from './client-physique.component';
import { ClientPhysiqueService } from './client-physique.service';


@NgModule({
  declarations: [
    ClientPhysiqueComponent
  ],
  imports: [
    CommonModule,
    ClientPhysiqueRoutingModule
  ],
  providers : [
    ClientPhysiqueService
  ]
})
export class ClientPhysiqueModule { }
