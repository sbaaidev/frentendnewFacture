import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientMoraleComponent } from './client-morale.component';


const routes: Routes = [

  {
    path: '',
    component :ClientMoraleComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientMoraleRoutingModule { }
