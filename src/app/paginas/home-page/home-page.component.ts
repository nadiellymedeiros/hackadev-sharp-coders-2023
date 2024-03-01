import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
    selector: 'app-home-page',
    standalone: true,
    templateUrl: './home-page.component.html',
    styleUrl: './home-page.component.css',
    imports: [RouterModule]
})
export class HomePageComponent {

    constructor(private router:Router){}

    goToLogin(): void {
        this.router.navigateByUrl('/login')
    }

    goToCadastro(): void {
        this.router.navigateByUrl('/cadastro')
    }
}
