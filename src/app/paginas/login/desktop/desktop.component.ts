import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';



@Component({
  selector: 'app-desktop',
  standalone: true,

  imports: [CommonModule, FormsModule, ReactiveFormsModule],


  templateUrl: './desktop.component.html',
  styleUrl: './desktop.component.css'
})
export class DesktopComponent {
  @Input()
  password!: string;

  type: string = 'password';
  classList: any;

  togglePassword() {
    this.type = this.type === 'password' ? 'text' : 'password';
    const togglePasswordElement = document.getElementById('togglePassword');
    if (togglePasswordElement) {
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

