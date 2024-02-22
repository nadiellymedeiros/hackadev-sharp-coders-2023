import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-content-home',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './content-home.component.html',
  styleUrl: './content-home.component.css'
})
export class ContentHomeComponent {

  constructor(private router: Router) {}

  goToHome(): void {
    this.router.navigateByUrl('/home');
  }

  goToExtrato(): void {
    this.router.navigateByUrl('/extrato');
  }
  

}
