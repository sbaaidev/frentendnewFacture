import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FactureClientRoutingModule } from './facture-client-routing.module';
import { FactureClientComponent } from './facture-client.component';
import { FactureClientService } from './facture-client.service';


@NgModule({
  declarations: [
    FactureClientComponent,
  ],
  imports: [
    CommonModule,
    FactureClientRoutingModule
  ],
  providers: [FactureClientService]
})
export class FactureClientModule { }
