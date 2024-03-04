import { Component } from '@angular/core';
import { FooterMobileComponent } from './footer-mobile/footer-mobile.component';
import { FooterDesktopComponent } from './footer-desktop/footer-desktop.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [FooterMobileComponent, FooterDesktopComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent {}
