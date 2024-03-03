import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, FormsModule, ReactiveFormsModule, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxMaskDirective, NgxMaskPipe } from 'ngx-mask';

function passwordValidator(): ValidatorFn {
  return (control: AbstractControl) => {
    const hasUpperCase = /[A-Z]/.test(control.value);
    const hasLowerCase = /[a-z]/.test(control.value);
    const hasNumber = /[0-9]/.test(control.value);
    const hasCharacters = /[!, @, #, $, %, &, *]/.test(control.value);

    if(hasUpperCase && hasNumber && hasLowerCase && hasCharacters) {
      return null;
    }

    return { invalidPassword: true };
  }
}

@Component({
  selector: 'app-mobile',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, NgxMaskDirective, NgxMaskPipe],
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

  toggleConfirmPassword() {
    this.type = this.type === 'password' ? 'text' : 'password';
    const passwordElement = document.getElementById('floatingConfirmPassword') as HTMLInputElement;
    const togglePasswordElement = document.getElementById('toggleConfirmPassword');
    if (passwordElement && togglePasswordElement) {
      passwordElement.type = this.type;
      this.classList = togglePasswordElement.classList;
      this.classList.toggle('bi-eye');
    }
  }

  constructor(private router:Router){}

  form = new FormGroup({
    userId: new FormControl(''),
    email: new FormControl('', Validators.email),
    tel: new FormControl(''),
    cpf: new FormControl(''),
    password: new FormControl('', [Validators.minLength(8), passwordValidator()]),
  });

  public submit() {
    this.router.navigate(['/home-page']);
  }
}