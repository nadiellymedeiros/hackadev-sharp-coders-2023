import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-mobile',
  standalone: true,
  imports: [],
  templateUrl: './mobile.component.html',
  styleUrl: './mobile.component.css'
})

export class MobileComponent {
  @Input()
  password!: string;

  type: string = 'password';
  classList: any;

  togglePassword() {
    this.type = this.type === 'password' ? 'text' : 'password';
    const passwordElement = document.getElementById('floatingPassword') as HTMLInputElement;
    const togglePasswordElement = document.getElementById('togglePassword');
    if (passwordElement && togglePasswordElement) {
      passwordElement.type = this.type;
      this.classList = togglePasswordElement.classList;
      this.classList.toggle('bi-eye');
    }
  }
}

