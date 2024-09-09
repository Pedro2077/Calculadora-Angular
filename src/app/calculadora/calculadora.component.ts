import { Component } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent {
  valor1: number = 0;
  valor2: number = 0;
  resultado: number = 0;

  somar() {
    this.resultado = this.valor1 + this.valor2;
  }

  subtrair() {
    this.resultado = this.valor1 - this.valor2;
  }

  multiplicar() {
    this.resultado = this.valor1 * this.valor2;
  }

  dividir() {
    if (this.valor2 !== 0) {
      this.resultado = this.valor1 / this.valor2;
    } else {
      this.resultado = NaN; // Evitar divisão por zero
    }
  }
}
