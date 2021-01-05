import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FactureClientComponent } from './facture-client.component';


const routes: Routes = [
  {
    path :'',
    component : FactureClientComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FactureClientRoutingModule { }
