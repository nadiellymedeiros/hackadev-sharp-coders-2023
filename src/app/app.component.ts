import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterOutlet } from '@angular/router';
import { ExtratoComponent } from './paginas/extrato/extrato.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ExtratoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'app-pay';

  constructor(private router:Router){}

    goHome (): void { 
        this.router.navigateByUrl('/home');
    }

    goExtrato (): void { 
        this.router.navigateByUrl('/extrato');
    }

    //Ainda não implementado
    goPoupanca (): void { 
        this.router.navigateByUrl('/poupanca');
    }
}
