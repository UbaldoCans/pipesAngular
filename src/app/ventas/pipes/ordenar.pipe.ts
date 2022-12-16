import { Pipe, PipeTransform } from '@angular/core';
import { Heroe } from '../interfaces/ventas.interface';

@Pipe({
  name: 'ordenar'
})
//pipe para ordenar alfabeticamente el arreglo de heroes en la tabla
export class OrdenarPipe implements PipeTransform {

  transform(value: Heroe[], ordenarPor: string = 'sin valor' ): Heroe[] {

    switch (ordenarPor) {

      case 'nombre':
        return value.sort((a,b) => ( a.nombre > b.nombre ) ? 1 : -1);

        case 'vuela':
        return value.sort((a,b) => ( a.vuela > b.vuela ) ? -1 : 1);  
        
        case 'color':
          return value.sort((a,b) => ( a.color > b.color ) ? 1 : -1);  
          break;
      
      default:
        return value
    }

  }

}
