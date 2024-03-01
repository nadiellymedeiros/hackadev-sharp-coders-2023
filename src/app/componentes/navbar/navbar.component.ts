import { Component } from '@angular/core';
import { NavbarDesktopComponent } from './navbar-desktop/navbar-desktop.component';
import { NavbarMobileComponent } from './navbar-mobile/navbar-mobile.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [NavbarDesktopComponent, NavbarMobileComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {}
