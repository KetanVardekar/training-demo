import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Dashboard1RoutingModule } from './dashboard-1-routing.module';
import { Dash2Component } from './dash-2/dash-2.component';


@NgModule({
  declarations: [
    Dash2Component
  ],
  imports: [
    CommonModule,
    Dashboard1RoutingModule
  ]
})
export class Dashboard1Module { }
