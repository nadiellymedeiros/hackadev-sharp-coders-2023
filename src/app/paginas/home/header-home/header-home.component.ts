import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-header-home',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './header-home.component.html',
  styleUrl: './header-home.component.css'
})
export class HeaderHomeComponent {

  constructor(private router: Router) {}

  goToHome(): void {
    this.router.navigateByUrl('/home');
  }

  goToExtrato(): void {
    this.router.navigateByUrl('/extrato');
  }
  
}
