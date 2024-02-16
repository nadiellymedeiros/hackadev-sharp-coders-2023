import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [CommonModule, RouterOutlet],
})
export class AppComponent {
  title = 'app-pay';

  constructor(private router: Router) {}

  goHome(): void {
    this.router.navigateByUrl('/home');
  }

  goExtrato(): void {
    this.router.navigateByUrl('/extrato');
  }
  
}
