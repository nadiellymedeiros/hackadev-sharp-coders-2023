import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterDesktopComponent } from '../footer/footer-desktop/footer-desktop.component';
import { FooterMobileComponent } from '../footer/footer-mobile/footer-mobile.component';
import { CommonModule } from '@angular/common';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-transacoes',
  standalone: true,
  imports: [
    NavbarComponent,
    FooterDesktopComponent,
    FooterMobileComponent,
    CommonModule,
    ReactiveFormsModule,
  ],
  templateUrl: './transacoes.component.html',
  styleUrl: './transacoes.component.css',
})
export class TransacoesComponent {}
