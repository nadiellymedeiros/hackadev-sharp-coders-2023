import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { FooterDesktopComponent } from "../../componentes/footer/footer-desktop/footer-desktop.component";
import { FooterMobileComponent } from "../../componentes/footer/footer-mobile/footer-mobile.component";

@Component({
    selector: 'app-home-page',
    standalone: true,
    templateUrl: './home-page.component.html',
    styleUrl: './home-page.component.css',
    imports: [RouterModule, FooterDesktopComponent, FooterMobileComponent]
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
