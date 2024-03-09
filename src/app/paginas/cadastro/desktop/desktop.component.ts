import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, FormGroupDirective, FormsModule, NgForm, ReactiveFormsModule, ValidatorFn, Validators } from '@angular/forms';
import { FooterDesktopComponent } from '../../../componentes/footer/footer-desktop/footer-desktop.component';
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
  selector: 'app-desktop',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, FooterDesktopComponent, NgxMaskDirective, NgxMaskPipe],
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
    userId: new FormControl(''),
    email: new FormControl('', Validators.email),
    tel: new FormControl(''),
    cpf: new FormControl(''),
    password: new FormControl('', [Validators.minLength(8), passwordValidator()]),
  });

  public submit() {
    this.router.navigate(['/home']);
  }

}

