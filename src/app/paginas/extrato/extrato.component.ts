import { Component } from '@angular/core';
import { ContentExtratoComponent } from './content-extrato/content-extrato.component';
import { HeaderExtratoComponent } from './header-extrato/header-extrato.component';
import { FooterComponent } from '../../componentes/footer/footer.component';

@Component({
  selector: 'app-extrato',
  standalone: true,
  imports: [ContentExtratoComponent, HeaderExtratoComponent, FooterComponent],
  templateUrl: './extrato.component.html',
  styleUrl: './extrato.component.css',
})
export class ExtratoComponent {}
