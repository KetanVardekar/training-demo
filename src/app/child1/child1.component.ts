
import { Component, EventEmitter, Input, Output,Attribute, ContentChild, ElementRef, AfterContentInit, OnInit } from '@angular/core';

@Component({
  selector: 'app-child1',
  standalone: true,
  imports: [],
  templateUrl: './child1.component.html',
  styleUrl: './child1.component.css'
})
export class Child1Component implements AfterContentInit,OnInit {
  @Input() data!: string;
  @Input() staticData!: string
 
  @Output() dataToSend = new EventEmitter<any>()

  @ContentChild('text', { read: ElementRef }) textField!: ElementRef;
  constructor(@Attribute('staticData') t: string){

    console.log(t);
    
  }
  ngOnInit(): void {
    console.log(this.textField);
    
  }
  ngAfterContentInit(): void {
    console.log(this.textField);
    
    if(this.textField){
      this.textField.nativeElement.value = 'Udated'
    }
  }
  submit() {
    this.dataToSend.emit("Message from child");
    this.textField.nativeElement.value = 'Updated new'
  }

}
  