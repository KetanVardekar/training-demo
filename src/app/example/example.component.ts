import { CommonModule } from '@angular/common';
import { Component, ElementRef, HostBinding, HostListener, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-example',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './example.component.html',
  styleUrl: './example.component.css'
})
export class ExampleComponent {
  @ViewChild('image') image!: TemplateRef<any>;
  @ViewChild('myDiv') myDiv!: ElementRef;
  @ViewChild('hyy') hyy!: ElementRef;
  @HostBinding('style.backgroundColor') backgroundColor: string = 'blue';
  
  constructor(private viewContainerRef: ViewContainerRef) {}


  changeColor() {
    this.myDiv.nativeElement.style.backgroundColor = 'yellow';
  }
  renderTemplate(){
 
      
      this.viewContainerRef.createEmbeddedView(this.image);
    
  }

  clearTemplate(){
this.viewContainerRef.clear();
  }


  // Listen to mouseenter event on the host element
  @HostListener('mouseenter') onMouseEnter() {
    console.log("enter");
    this.myDiv.nativeElement.value = 'Ketan';
    this.hyy.nativeElement.value = 'Hovered'
    
    this.backgroundColor = 'lightblue';  // Change background color when mouse enters
  }

  // Listen to mouseleave event on the host element
  @HostListener('mouseleave') onMouseLeave() {
    console.log("leave");
    this.myDiv.nativeElement.style.backgroundColor = 'red';
     this.hyy.nativeElement.value = ''
    this.backgroundColor = 'blue';  // Reset background color when mouse leaves
  }
}
