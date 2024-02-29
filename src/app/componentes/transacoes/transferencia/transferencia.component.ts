import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from '../../navbar/navbar.component';
import { FooterDesktopComponent } from '../../footer/footer-desktop/footer-desktop.component';
import { FooterMobileComponent } from '../../footer/footer-mobile/footer-mobile.component';

@Component({
  selector: 'app-transferencia',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NavbarComponent,
    FooterDesktopComponent,
    FooterMobileComponent,
  ],
  templateUrl: './transferencia.component.html',
  styleUrl: './transferencia.component.css',
})
export class TransferenciaComponent {
  formularioTransferencia = new FormGroup({
    valorTransferencia: new FormControl(''),
    instituicao: new FormControl(''),
    agencia: new FormControl(''),
    contaCorrente: new FormControl(''),
  });
}
