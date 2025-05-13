import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-calculadora',
  imports: [FormsModule, CommonModule],
  templateUrl: './calculadora.component.html',
  styleUrl: './calculadora.component.scss'
})
export class CalculadoraComponent {

  numero1: number = 0; //metodo de declaração de variavel
  numero2 : number = 0; 
  resultado ?: number; //ou com ? se não quiser inicializar a variavel

  calcularResultado(){
    this.resultado = this.numero1 + this.numero2;
  }

}
