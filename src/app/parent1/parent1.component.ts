import { Component } from '@angular/core';
import { Child1Component } from '../child1/child1.component';

@Component({
  selector: 'app-parent1',
  standalone: true,
  imports: [Child1Component],
  templateUrl: './parent1.component.html',
  styleUrl: './parent1.component.css'
})
export class Parent1Component {
  data!: string
  childData!: string
  staticData!:string

  submit() {
    this.data = 'Send Data to Child'
  }

  event1($event: any) {
    console.log($event);
this.childData = $event
    // this.childData
  }
}
