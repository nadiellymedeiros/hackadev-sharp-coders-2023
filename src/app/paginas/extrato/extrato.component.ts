import { Component } from '@angular/core';
import { ContentExtratoComponent } from './content-extrato/content-extrato.component';
import { HeaderExtratoComponent } from './header-extrato/header-extrato.component';
import { FooterMobileComponent } from '../../componentes/footer/footer-mobile/footer-mobile.component';
import { FooterDesktopComponent } from '../../componentes/footer/footer-desktop/footer-desktop.component';
@Component({
  selector: 'app-extrato',
  standalone: true,
  imports: [
    ContentExtratoComponent,
    HeaderExtratoComponent,
    FooterMobileComponent,
    FooterDesktopComponent,
  ],
  templateUrl: './extrato.component.html',
  styleUrl: './extrato.component.css',
})
export class ExtratoComponent {}
