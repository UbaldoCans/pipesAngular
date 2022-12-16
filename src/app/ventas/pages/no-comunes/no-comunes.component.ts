import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  
})
export class NoComunesComponent  {
 

  //i18nSelect pipe
 nombre: string = 'Ubaldo';
 genero: string = 'masculino';

 invitacionMapa = {
  'masculino': 'bienvenido',
  'femenino': 'bienvenida',
 }
 //i18nPlural
 clientes: string[] = ['pedro', 'juan', 'roberto', 'maria', 'paola', 'sonya', 'pedro']
 clientesMapa = {
  '=0': 'no tenemos clientes esperado',
  '=1': 'tenemos un cliente esperando',
  'other': 'tenemos # clientes esperando'
 }
 cambiarPersona (){
     this.nombre = 'Natasha';
     this.genero = 'femenino'
 }

 eliminarCliente(){
    this.clientes.pop()
 }

 //keyValue pipe
 persona = {
   nombre: 'Ubaldo',
   edad: '28',
   direccion: 'San francisco C'
 }

 //json pipe
 heroes = [
   {
    nombre: 'Clark kent',
    nombreHeroe: 'Super Man',
    poder: 'super fuerza',
    vuela: true
   },
   {
    nombre: 'Diana',
    nombreHeroe: 'Mujer Maravilla',
    poder: 'super',
    vuela: false

   },
   {
    nombre: 'Bruce Wayne',
    nombreHeroe: 'Batman',
    poder: 'es rico',
    vuela: true
   },
   {
    nombre: 'Barry Allen',
    nombreHeroe: 'Flash',
    poder: 'super velocidad',
    vuela: false
   }
 ]
 // async pipe
  miObservable = interval( 1000 ); 
  
  valorPromesa = new Promise( (resolve, reject) =>{
    
    setTimeout(() => {
      resolve ( 'tenemos data de promesas');
    }, 3500);
  })
  

}
