import { Component } from '@angular/core';
import { ContentExtratoComponent } from './content-extrato/content-extrato.component';
import { HeaderExtratoComponent } from './header-extrato/header-extrato.component';
import { FooterMobileComponent } from '../../componentes/footer/footer-mobile/footer-mobile.component';
import { FooterDesktopComponent } from '../../componentes/footer/footer-desktop/footer-desktop.component';
import { NavbarMobileComponent } from '../../componentes/navbar/navbar-mobile/navbar-mobile.component';
import { NavbarDesktopComponent } from '../../componentes/navbar/navbar-desktop/navbar-desktop.component';
import { SidebarComponent } from '../../componentes/sidebar/sidebar.component';
@Component({
  selector: 'app-extrato',
  standalone: true,
  imports: [
    ContentExtratoComponent,
    HeaderExtratoComponent,
    FooterMobileComponent,
    FooterDesktopComponent,
    NavbarMobileComponent,
    NavbarDesktopComponent,
    SidebarComponent,
  ],
  templateUrl: './extrato.component.html',
  styleUrl: './extrato.component.css',
})
export class ExtratoComponent {}
