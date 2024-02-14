import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MobileComponent } from './mobile/mobile.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, MobileComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

}
