import { Routes } from '@angular/router';
import { LoginComponent } from '../pages/login/login.component';
import { HomeComponent } from '../pages/home/home.component';
import { SignupComponent } from '../pages/signup/signup.component';


export const routes: Routes = [
    {
        path:'',
        redirectTo:'login',
        pathMatch:'full'

    },
    {
        path:'login',
        component:LoginComponent
    },
    {
      path:'signup',
      component:SignupComponent
  },
    {
      path:'home',
      component:HomeComponent,

      children: [

    ]
    },


];
