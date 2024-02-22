import { Component } from '@angular/core';
import { FooterMobileComponent } from './footer-mobile/footer-mobile.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [FooterMobileComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent {}
