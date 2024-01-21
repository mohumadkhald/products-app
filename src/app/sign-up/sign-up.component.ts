import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [ReactiveFormsModule,NgIf],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent implements OnInit  {

  registerForm!: FormGroup;
  

  constructor(private fb: FormBuilder,private router: Router) {
    // this.gameForm = new FormGroup({
    //   gameName: new FormControl('', [
    //     Validators.required,
    //     Validators.minLength(3),
    //   ]),
    //   description: new FormControl('', [
    //     Validators.required,
    //     Validators.minLength(10),
    //     Validators.maxLength(200),
    //   ]),
    //   price: new FormControl('', [Validators.required]),
    // });
    
    
  }
  ngOnInit(): void {
    this.registerForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.pattern("^[a-zA-Z0-9]+@[a-z]+\.[a-z]{2,4}$") ]],
      username: ['', [Validators.required, Validators.pattern("[^' ']+")]],
      password: ['', [Validators.required,  Validators.maxLength(30), Validators.pattern("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$")]],
      confirm: ['', Validators.required],
    }, { validator: this.passwordMatchValidator });
  }
  passwordMatchValidator(formGroup: FormGroup) {
    const password = formGroup.get('password')?.value;
    const confirm = formGroup.get('confirm')!.value;  // Use non-null assertion here
  
    if (password === confirm) {
      return null; // Valid
    } else {
      formGroup.get('confirm')!.setErrors({ mismatch: true });
      return { mismatch: true }; // Invalid
    }
  }
  
  

  handleSubmitForm() {
    if (this.registerForm.valid) {
      console.log('Form submitted:', this.registerForm.value);

      // Replace the following line with your actual authentication logic.
      // For demonstration purposes, we'll navigate to the dashboard on successful login.
      this.router.navigate(['']);
    }
  }
}
