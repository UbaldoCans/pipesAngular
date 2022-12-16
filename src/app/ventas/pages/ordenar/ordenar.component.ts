import { Component } from '@angular/core';
import { Color, Heroe } from '../../interfaces/ventas.interface';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  
})
export class OrdenarComponent  {

  enMayusculas: boolean = true;

  ordenarPor: string = '';

  heroes: Heroe [] = [
    {
      nombre: 'Clark Kent',
      nombreSuper: 'Superman',
      poder: 'super fuerza',
      vuela: true,
      color: Color.azul
    },
    {
      nombre: 'Bruce Wayne',
      nombreSuper: 'Batman',
      poder: 'Es Rico',
      vuela: true,
      color: Color.negro
    },
    {
      nombre: 'Diana',
      nombreSuper: 'Wonder Woman',
      poder: 'Super Fuerza',
      vuela: false,
      color: Color.rojo
    },
    {
      nombre: 'Barry Allen',
      nombreSuper: 'Flash',
      poder: 'Super Velocidad',
      vuela: false,
      color: Color.rojo
    },
    {
      nombre: 'Arthur Curry',
      nombreSuper: 'Acuaman',
      poder: 'Super Pez',
      vuela: false,
      color: Color.verde
    },
  ]

  cambiarA(){
     this.enMayusculas = !this.enMayusculas;
  }
  cambiarOrden (valor: string){
    this.ordenarPor = valor
    
  }
    
  
}
