import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MobileComponent } from './mobile/mobile.component';
import { DesktopComponent } from "./desktop/desktop.component";

@Component({
    selector: 'app-login',
    standalone: true,
    templateUrl: './login.component.html',
    styleUrl: './login.component.css',
    imports: [CommonModule, MobileComponent, LoginComponent, DesktopComponent]
})
export class LoginComponent {

}
