import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BonServiceRoutingModule } from './bon-service-routing.module';
import { BonServiceComponent } from './bon-service.component';
import { BonServiceService } from './bon-service.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    BonServiceComponent
  ],
  imports: [
    CommonModule,
    BonServiceRoutingModule,
    HttpClientModule
  ],
  providers: [
    BonServiceService
  ]
})
export class BonServiceModule { }
