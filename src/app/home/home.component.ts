import { Component, HostBinding, OnInit } from '@angular/core';
import { ContactComponent } from '../contact/contact.component';

import { TextColorDirective } from '../Directive/text-color.directive';
import { InputComponent } from '../input/input.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ContactComponent,TextColorDirective,InputComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  @HostBinding('style.backgroundColor') backgroundColor: string = 'lightblue';

  label= 'Email Address';
  placeHolder= 'Enter email here '
  html='<input type="email>"'
  
  ngOnInit(): void {
   
  }


  

}
