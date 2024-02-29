import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterDesktopComponent } from '../footer/footer-desktop/footer-desktop.component';
import { FooterMobileComponent } from '../footer/footer-mobile/footer-mobile.component';

@Component({
  selector: 'app-meus-cartoes',
  standalone: true,
  imports: [NavbarComponent, FooterDesktopComponent, FooterMobileComponent],
  templateUrl: './meus-cartoes.component.html',
  styleUrl: './meus-cartoes.component.css',
})
export class MeusCartoesComponent {}
