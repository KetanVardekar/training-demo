import { Component, ComponentFactoryResolver, ElementRef, HostListener, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { ContactComponent } from '../contact/contact.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-example3',
  standalone: true,
  imports: [ContactComponent,CommonModule],
  templateUrl: './example3.component.html',
  styleUrl: './example3.component.css'
})
export class Example3Component {
  @ViewChild('div1') ele!: ElementRef;
  @ViewChild('hostele') host!: ElementRef;
  @ViewChild('image') image!: TemplateRef<any>;
  @ViewChild('container', { read: ViewContainerRef }) viewContainerRef!: ViewContainerRef;

  constructor(private resolver: ComponentFactoryResolver){

  }

  submit(){
this.ele.nativeElement.value = 'Ketan';
this.viewContainerRef.createEmbeddedView(this.image)


  }


  ngAfterViewInit() {
    const factory = this.resolver.resolveComponentFactory(ContactComponent)
    const componentRef = this.viewContainerRef.createComponent(factory);
    
  }




  @HostListener('mouseenter') onMouseEnter() {
    this.host.nativeElement.backgroundColor = 'red';
    console.log("mouse enter")
    }

    @HostListener('mouseleave') onMouseLeave() {
      this.host.nativeElement.backgroundColor = 'yellow';
      console.log("mouse leave")
      }

}
