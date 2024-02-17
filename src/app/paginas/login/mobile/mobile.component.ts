import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mobile',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
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

  constructor(private router:Router){}

  form = new FormGroup({
    userId: new FormControl('',Validators.required),
    password: new FormControl('',Validators.required)
  });

  autentication():void{
    if(this.form.value.userId === 'admin' && this.form.value.password === 'admin'){

      localStorage.setItem('userId', this.form.value.userId);

      this.router.navigateByUrl('/home');

    }else{

    alert('Usuário ou senha incorretos!');

    }
  }
}

