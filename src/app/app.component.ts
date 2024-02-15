import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterOutlet } from '@angular/router';
import { ExtratoComponent } from './paginas/extrato/extrato.component';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet, ExtratoComponent]
})
export class AppComponent {
  title = 'app-pay';

  constructor(private router:Router){}

    homeRouter (): void { 
        this.router.navigateByUrl('/home');
    }

    extrato (): void { 
        this.router.navigateByUrl('/extrato');
    }

    poupanca (): void { 
        this.router.navigateByUrl('/poupanca');
    }
}
