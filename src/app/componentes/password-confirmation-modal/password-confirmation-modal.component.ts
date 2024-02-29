import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-password-confirmation-modal',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './password-confirmation-modal.component.html',
  styleUrl: './password-confirmation-modal.component.css'
})
export class PasswordConfirmationModalComponent {
  password = {
    digit1: '',
    digit2: '',
    digit3: '',
    digit4: ''
  };

  moveToNext(event: any, nextInputId: string, prevInputId: string) {
    const input = event.target;
    const maxLength = input.getAttribute('maxlength');
    const currentLength = input.value.length;
    const isBackspace = event.key === 'Backspace';

    if (isBackspace && currentLength === 0) {
      const prevElement = document.getElementById(prevInputId);
      if (prevElement) {
        prevElement.focus();
      }
    } else if (!isBackspace && currentLength === parseInt(maxLength)) {
      const nextElement = document.getElementById(nextInputId);
      if (nextElement) {
        nextElement.focus();
      }
    }
  }

  submitForm() {
    const fullPassword = this.password.digit1 + this.password.digit2 + this.password.digit3 + this.password.digit4;
    console.log('Senha completa:', fullPassword);
    // Aqui você pode enviar a senha para onde for necessário
  }
}
