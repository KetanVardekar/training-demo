import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  loginData = {
    email: "",
    password: ""
  };

  onSubmit(form: any) {
    if (form.valid) {
      console.log('Form Submitted!',this.loginData);
      
    }
  }
}
