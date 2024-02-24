import { Component } from '@angular/core';
import { MeusCartoesComponent } from '../../componentes/meus-cartoes/meus-cartoes.component';

@Component({
  selector: 'app-cartoes',
  standalone: true,
  imports: [MeusCartoesComponent],
  templateUrl: './cartoes.component.html',
  styleUrl: './cartoes.component.css',
})
export class CartoesComponent {}
