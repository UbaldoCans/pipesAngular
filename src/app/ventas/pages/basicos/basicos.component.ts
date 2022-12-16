import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  
})
export class BasicosComponent  {

  nombreLower: string = 'ubaldo';
  nombreUpper: string = 'UBALDO';
  nombreCompleto: string = 'uBaldO cAnSeCo';

  fecha: Date = new Date();
}
