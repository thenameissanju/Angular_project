import { Component } from '@angular/core';
import { NavComponent } from '../nav/nav.component';
import { RouterLink, RouterLinkActive, RouterOutlet,  } from '@angular/router';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterOutlet, RouterLink,RouterLinkActive ,NavComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
