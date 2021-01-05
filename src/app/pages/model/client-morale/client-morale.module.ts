import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientMoraleRoutingModule } from './client-morale-routing.module';
import { ClientMoraleComponent } from './client-morale.component';
import { ClientMoraleService } from './client-morale.service';


@NgModule({
  declarations: [
    ClientMoraleComponent,
  ],
  imports: [
    CommonModule,
    ClientMoraleRoutingModule
  ],
  providers: [
    ClientMoraleService
  ]

})
export class ClientMoraleModule { }
