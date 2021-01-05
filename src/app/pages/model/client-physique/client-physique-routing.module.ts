import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientPhysiqueComponent } from './client-physique.component';

const routes: Routes = [
  { path : '',
    component : ClientPhysiqueComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientPhysiqueRoutingModule { }
