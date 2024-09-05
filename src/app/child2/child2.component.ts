import { AfterContentInit, Attribute, Component, ContentChild, ElementRef, EventEmitter, Input, OnInit, Output, QueryList } from '@angular/core';

@Component({
  selector: 'app-child2',
  standalone: true,
  imports: [],
  templateUrl: './child2.component.html',
  styleUrl: './child2.component.css'
})
export class Child2Component implements AfterContentInit ,OnInit{
  @Input() parentData!: string;
  @Input() staticData!: string;
  @Output() message = new EventEmitter<any>();
  // @ContentChild('text', { read: ElementRef }) textField!: ElementRef;
  @ContentChild('text') texts!: QueryList<any>;
  childData!: string


constructor(@Attribute('staticData1') t :string){
  console.log(t);
  
  
}
  ngOnInit(): void {
    // console.log(this.textField);
    
  }
  ngAfterContentInit(): void {
    // console.log(this.textField);
    
    // this.textField.nativeElement.value = 'Ketan V'
    this.texts.changes.subscribe(()=>{
      this.log()
    })
  }
  
  log() {
    console.log('Projected items:');
  }
  childButton() {
    this.message.emit('Child Data')
  }
}
