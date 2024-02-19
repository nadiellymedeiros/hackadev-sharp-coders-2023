import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentHomeComponent } from './content-home/content-home.component';
import { HeaderHomeComponent } from './header-home/header-home.component';
import { FooterMobileComponent } from '../../componentes/footer/footer-mobile/footer-mobile.component';
import { FooterDesktopComponent } from '../../componentes/footer/footer-desktop/footer-desktop.component';

import { Router } from '@angular/router';
import { FooterComponent } from '../../componentes/footer/footer.component';
import { NavbarDesktopComponent } from '../../componentes/navbar/navbar-desktop/navbar-desktop.component';
import { NavbarMobileComponent } from '../../componentes/navbar/navbar-mobile/navbar-mobile.component';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  imports: [
    CommonModule,
    ContentHomeComponent,
    HeaderHomeComponent,
    FooterComponent,
    FooterMobileComponent,
    FooterDesktopComponent,
    NavbarDesktopComponent,
    NavbarMobileComponent,
  ],
})
export class HomeComponent {}
