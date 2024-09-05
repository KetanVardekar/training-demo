import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-element-ref',
  standalone: true,
  imports: [],
  templateUrl: './element-ref.component.html',
  styleUrl: './element-ref.component.css'
})
export class ElementRefComponent {
  @ViewChild('myButton', { static: true }) button!: ElementRef;

  
  @ViewChild('para1', { static: true }) paragraph1!: ElementRef;
  @ViewChild('para2', { static: true }) paragraph2!: ElementRef;

  changeButtonColorById() {
    const button = document.getElementById('myButton');
    if (button) {
      button.style.backgroundColor = 'orange';
    }
  }

  changeButtonColor() {
    this.button.nativeElement.style.backgroundColor = 'blue';
  }
  changeParagraphsText() {
    this.paragraph1.nativeElement.textContent = 'Updated Paragraph 1';
    this.paragraph2.nativeElement.textContent = 'Updated Paragraph 2';
  }
}
