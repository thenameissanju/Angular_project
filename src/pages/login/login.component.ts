import { Component, inject } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
import {ReactiveFormsModule, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import {CommonModule, NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule,NgOptimizedImage,
    CommonModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  router=inject(Router);

  profileForm = new FormGroup({
    email: new FormControl('', [Validators.required,Validators.email]),
    password: new FormControl('', [Validators.required,Validators.minLength(8)]),
  });

  isFormsubmitted:boolean=false;

  handleLogin() {

    const isFormValid=this.profileForm.valid;
   // debugger;
    this.isFormsubmitted=true;

    const isLocalData=localStorage.getItem("angular18Local");
    if(isLocalData!=null){
    const users = JSON.parse(isLocalData);
      console.log("this.profileForm",this.profileForm)

    const isUserFound =users.find((m:any)=>m.email==this.profileForm.value.email && m.password==this.profileForm.value.password);
    if(isUserFound!=undefined){

      //this.router.navigateByUrl('home')
      this.router.navigate(['home']);
      alert("Login Success");

    }else{
      alert("User name or Password is Wrong")
    }

    }else{
      alert("No User Found")
    }


    // alert("Login Success");
  }

  isLoginView : boolean = true;

  registerForm = new FormGroup({
    username: new FormControl('', [Validators.required,Validators.minLength(5),Validators.pattern('[a-zA-Z0-9]*')]),
    email: new FormControl('', [Validators.required,Validators.email]),
    password: new FormControl('', [Validators.required,Validators.minLength(8)]),
  });


  navFun(){
    this.router.navigate(['signup']);
  }
class='up';


}
