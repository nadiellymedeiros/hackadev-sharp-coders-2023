import { Component } from '@angular/core';
import { NavbarComponent } from '../../navbar/navbar.component';
import { CommonModule } from '@angular/common';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { FooterDesktopComponent } from '../../footer/footer-desktop/footer-desktop.component';
import { FooterMobileComponent } from '../../footer/footer-mobile/footer-mobile.component';

@Component({
  selector: 'app-saque',
  standalone: true,
  imports: [
    NavbarComponent,
    CommonModule,
    ReactiveFormsModule,
    FooterDesktopComponent,
    FooterMobileComponent,
  ],
  templateUrl: './saque.component.html',
  styleUrl: './saque.component.css',
})
export class SaqueComponent {
  formularioSaque = new FormGroup({});
}
