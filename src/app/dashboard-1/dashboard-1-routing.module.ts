import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Dash2Component } from './dash-2/dash-2.component';

const routes: Routes = [
  {
    path:'',
    component:Dash2Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Dashboard1RoutingModule { }
