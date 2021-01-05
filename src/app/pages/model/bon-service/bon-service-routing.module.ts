import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BonServiceComponent } from './bon-service.component';


const routes: Routes = [
  {
    path : '',
    component :  BonServiceComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BonServiceRoutingModule { }
