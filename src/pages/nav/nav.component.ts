import { Component ,inject} from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet,  } from '@angular/router';
import { Router } from '@angular/router';
@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [RouterOutlet, RouterLink,RouterLinkActive],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {
  router=inject(Router);


  logout(){
    this.router.navigate(['login']);
  }
}
