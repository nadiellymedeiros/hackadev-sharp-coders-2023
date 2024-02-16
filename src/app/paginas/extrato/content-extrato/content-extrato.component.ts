import { Component } from '@angular/core';

@Component({
  selector: 'app-content-extrato',
  standalone: true,
  imports: [],
  templateUrl: './content-extrato.component.html',
  styleUrl: './content-extrato.component.css',
  styleUrl: './content-extrato.component.css',
})
export class ContentExtratoComponent {
  dataAtual() {
    const date = new Date();

<<<<<<< HEAD
    if (date.getDate() < 10) {
      var dia = `0${date.getDate()}`;
    } else {
      var dia = `${date.getDate()}`;
    }

    if (date.getMonth() + 1 < 10) {
      var mes = `0${date.getMonth() + 1}`;
    } else {
=======
    if(date.getDate() < 10) {
      var dia = `0${date.getDate()}`;
    }else{
      var dia = `${date.getDate()}`;
    }

    if(date.getMonth() + 1 < 10) {
      var mes = `0${date.getMonth() + 1}`;
    }else{
>>>>>>> 11a61d1 (Feature108: Adicionado responsividade para a parte mobile do extrato. Iniciado criação da parte desktop do extrato, foi inserido as partes basicas, como filtro, transações e horario em tempo real.)
      var mes = `${date.getMonth() + 1}`;
    }

    var ano = date.getFullYear();

<<<<<<< HEAD
    if (date.getHours() < 10) {
      var hora = `0${date.getHours()}`;
    } else {
      var hora = `${date.getHours()}`;
    }

    if (date.getMinutes() < 10) {
      var minuto = `0${date.getMinutes()}`;
    } else {
=======
    if(date.getHours() < 10) {
      var hora = `0${date.getHours()}`;
    }else{
      var hora = `${date.getHours()}`;
    }

    if(date.getMinutes() < 10) {
      var minuto = `0${date.getMinutes()}`;
    }else{
>>>>>>> 11a61d1 (Feature108: Adicionado responsividade para a parte mobile do extrato. Iniciado criação da parte desktop do extrato, foi inserido as partes basicas, como filtro, transações e horario em tempo real.)
      var minuto = `${date.getMinutes()}`;
    }

    return `${dia}/${mes}/${ano} às ${hora}:${minuto}`;
  }
}
