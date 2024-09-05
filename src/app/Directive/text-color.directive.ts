import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appTextColor]',
  standalone: true,
})
export class TextColorDirective {
  @Input() hoverColor: string = 'blue';

  constructor(private el: ElementRef) { }

  @HostListener('mouseenter') onMouseEnter() {
    this.changeColor(this.hoverColor);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.changeColor('');
  }

  private changeColor(color: string) {
    this.el.nativeElement.style.color = color;
  }
}
