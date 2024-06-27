import { Component, OnInit } from '@angular/core';
import { ContactComponent } from '../contact/contact.component';
import { myJson } from '../../../public/data';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ContactComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  jsonData = myJson;
  ngOnInit(): void {
    console.log(this.jsonData);
  }


  

}
