import { Component, inject } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule, NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [ReactiveFormsModule, NgOptimizedImage,
    CommonModule
  ],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {

  router = inject(Router);

  profileForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)]),
  });

  isFormsubmitted: boolean = false;


  registerForm = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.minLength(5), Validators.pattern('[a-zA-Z0-9]*')]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)]),
  });

  handleRegister() {
    alert(this.registerForm.value.username + ' | ' + this.registerForm.value.email + '|' + this.registerForm.value.password);
    debugger;


    const isLocalData = localStorage.getItem("angular18Local");
    if (isLocalData != null) {
      const localArray = JSON.parse(isLocalData);

      localArray.push(this.registerForm.value);
      localStorage.setItem("angular18Local", JSON.stringify(localArray));
      this.router.navigate(['login']);
    }
    else {
      const localArray = [];

      localArray.push(this.registerForm.value);
      localStorage.setItem("angular18Local", JSON.stringify(localArray));
      this.router.navigate(['login']);
    }
  }
  navFun(){
    this.router.navigate(['login']);
  }
  class = 'up';


}
