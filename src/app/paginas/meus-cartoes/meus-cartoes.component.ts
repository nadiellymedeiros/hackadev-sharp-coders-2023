import { Component } from '@angular/core';

import { NavbarDesktopComponent } from '../../componentes/navbar/navbar-desktop/navbar-desktop.component';
import { NavbarMobileComponent } from '../../componentes/navbar/navbar-mobile/navbar-mobile.component';
import { FooterDesktopComponent } from '../../componentes/footer/footer-desktop/footer-desktop.component';
import { FooterMobileComponent } from '../../componentes/footer/footer-mobile/footer-mobile.component';
import { MeusCartoesComponent } from '../../componentes/meus-cartoes/meus-cartoes.component'


@Component({
  selector: 'app-meus-cartoes',
  standalone: true,

  imports: [NavbarDesktopComponent,NavbarMobileComponent,FooterDesktopComponent,FooterMobileComponent, MeusCartoesComponent],
  templateUrl: './meus-cartoes.component.html',
  styleUrl: './meus-cartoes.component.css'
})
export class AppMeusCartoesComponent {

  imports: [],
  templateUrl: './meus-cartoes.component.html',
  styleUrl: './meus-cartoes.component.css'
})
export class MeusCartoesComponent {


}
