import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OverviewChildComponent } from './overview-child/overview-child.component';

const routes: Routes = [
  {
    path:'',
    component:OverviewChildComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OverviewRoutingModule { }
