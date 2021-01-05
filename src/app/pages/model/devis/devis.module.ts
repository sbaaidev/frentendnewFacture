import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DevisRoutingModule } from './devis-routing.module';
import { DevisComponent } from './devis.component';
import { DevisService } from './devis.service';


@NgModule({
  declarations: [
    DevisComponent,
  ],
  imports: [
    CommonModule,
    DevisRoutingModule
  ],
  providers: [DevisService]
})
export class DevisModule { }
