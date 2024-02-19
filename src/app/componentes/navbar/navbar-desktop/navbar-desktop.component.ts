import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar-desktop',
  standalone: true,
  imports: [],
  templateUrl: './navbar-desktop.component.html',
  styleUrl: './navbar-desktop.component.css'
})
export class NavbarDesktopComponent {
  
  constructor(private router: Router) {}

  goToHome(): void {
    this.router.navigateByUrl('/home');
  }

  goToExtrato(): void {
    this.router.navigateByUrl('/extrato');
  }
}
