import { Component } from '@angular/core';
import { ChildComponent } from '../child/child.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [ChildComponent,FormsModule],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent {
  parentMessage!: string;
  childMessage!: string;
  receivedMessage!:string
  sendMessage() {
    this.childMessage = this.parentMessage;
    this.parentMessage="";
  }

  receiveMessage($event: string) {
    this.receivedMessage = $event;
  }

  
}
