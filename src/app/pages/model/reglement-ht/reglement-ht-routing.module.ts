import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReglementHTComponent } from './reglement-ht.component';


const routes: Routes = [
  {
    path :'',
    component : ReglementHTComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReglementHTRoutingModule { }
