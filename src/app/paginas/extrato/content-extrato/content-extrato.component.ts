import { Component } from '@angular/core';

@Component({
  selector: 'app-content-extrato',
  standalone: true,
  imports: [],
  templateUrl: './content-extrato.component.html',
  styleUrl: './content-extrato.component.css',
})
export class ContentExtratoComponent {
  dataAtual() {
    const date = new Date();

    if(date.getDate() < 10) {
      var dia = `0${date.getDate()}`;
    }else{
      var dia = `${date.getDate()}`;
    }

    if(date.getMonth() + 1 < 10) {
      var mes = `0${date.getMonth() + 1}`;
    }else{
      var mes = `${date.getMonth() + 1}`;
    }

    var ano = date.getFullYear();

    if(date.getHours() < 10) {
      var hora = `0${date.getHours()}`;
    }else{
      var hora = `${date.getHours()}`;
    }

    if(date.getMinutes() < 10) {
      var minuto = `0${date.getMinutes()}`;
    }else{
      var minuto = `${date.getMinutes()}`;
    }

    return `${dia}/${mes}/${ano} às ${hora}:${minuto}`;
  }
}
