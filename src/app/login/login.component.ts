import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, NgIf],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(private router: Router) { }
onSubmit() {

    console.log('Form submitted');

    // Replace the following line with your actual authentication logic.
    // For demonstration purposes, we'll navigate to the dashboard on successful login.
    this.router.navigate(['']);
  
}

}
