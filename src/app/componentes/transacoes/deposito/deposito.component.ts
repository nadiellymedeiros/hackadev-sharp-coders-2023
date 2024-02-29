import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from '../../navbar/navbar.component';
import { FooterDesktopComponent } from '../../footer/footer-desktop/footer-desktop.component';
import { FooterMobileComponent } from '../../footer/footer-mobile/footer-mobile.component';

@Component({
  selector: 'app-deposito',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    CommonModule,
    NavbarComponent,
    FooterDesktopComponent,
    FooterMobileComponent,
  ],
  templateUrl: './deposito.component.html',
  styleUrl: './deposito.component.css',
})
export class DepositoComponent {
  formularioDeposito = new FormGroup({});
}
