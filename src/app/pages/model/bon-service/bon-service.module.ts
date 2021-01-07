import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BonServiceRoutingModule } from './bon-service-routing.module';
import { BonServiceComponent } from './bon-service.component';
import { BonServiceService } from './bon-service.service';
import { HttpClientModule } from '@angular/common/http';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { NbCardModule } from '@nebular/theme';


@NgModule({
  declarations: [
    BonServiceComponent
  ],
  imports: [
    CommonModule,
    BonServiceRoutingModule,
    HttpClientModule,
    Ng2SmartTableModule,
    NbCardModule
  ],
  providers: [
    BonServiceService
  ]
})
export class BonServiceModule { }
