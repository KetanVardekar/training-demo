import { Component, ComponentFactoryResolver, ElementRef, HostListener, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { ContactComponent } from '../contact/contact.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-example2',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './example2.component.html',
  styleUrl: './example2.component.css'
})
export class Example2Component {
  @ViewChild('eleref') ele!: ElementRef;
  @ViewChild('hostChild')child !: ElementRef
  @ViewChild('div1') div1!: ElementRef;
  @ViewChild('container', { read: ViewContainerRef }) viewContainerRef!: ViewContainerRef;
  @ViewChild('brand') brand!: TemplateRef<any>;
  
  constructor(private resolver: ComponentFactoryResolver,private viewContainerRef1: ViewContainerRef) {}
  submit(){
    this.ele.nativeElement.value= 'Update value';
    this.div1.nativeElement.style.backgroundColor = 'yellow';
    this.viewContainerRef1.createEmbeddedView(this.brand);
    
  }
  clear(){
    this.viewContainerRef1.clear();
  }

  ngOnInit() {
    

   
  }
  ngAfterViewInit() {
    const factory = this.resolver.resolveComponentFactory(ContactComponent);
    const componentRef = this.viewContainerRef.createComponent(factory);
    this.child.nativeElement.style.backgroundColor = 'green';
  }


@HostListener('mouseenter') onMouseEnter() {
this.child.nativeElement.style.backgroundColor= 'red'
}
@HostListener('mouseleave') onMouseLeave() {
  this.child.nativeElement.style.backgroundColor= 'yellow'
  }

 
}
