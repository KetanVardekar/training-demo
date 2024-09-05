import { Component } from '@angular/core';
import { Child2Component } from '../child2/child2.component';
import { TabGroupComponent } from '../tab-group/tab-group.component';
import { TabComponent } from '../tab/tab.component';

@Component({
  selector: 'app-parent2',
  standalone: true,
  imports: [Child2Component,TabGroupComponent,TabComponent],
  templateUrl: './parent2.component.html',
  styleUrl: './parent2.component.css'
})
export class Parent2Component {
  parentData!: string
  child!:string


  submit() {
    this.parentData = '<input  />'
  }

  messageEvent(event: string) {
    console.log(event);
this.child =  event
  }
}
