import { Attribute, Component, ContentChild, ElementRef, Input, OnChanges, platformCore, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [],
  templateUrl: './input.component.html',
  styleUrl: './input.component.css'
})
export class InputComponent implements OnChanges {
  @Input() placeHolder: any = ''
  @Input() label: any = ''
  @Input() html: any = ''


  @ContentChild('text', { read: ElementRef }) textField!: ElementRef;

  constructor(@Attribute('placeHolder') t: string) {
    console.log(t);

  }


  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);

  }


  ngAfterContentInit() {
    if (this.textField) {
      this.textField.nativeElement.value = 'Modified by Child';
      this.textField.nativeElement.style.backgroundColor = 'lightblue';

    }
  }

}
