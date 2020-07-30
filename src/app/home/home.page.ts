import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  numero = 0;
  multiplos = [];

  constructor() {}

  // Cuando se da click a un registro
  // se lanza un evento y este contiene
  // el valor del registro
  // ================================
  cargar(o) {
    const multiplos = [];
    console.log(o.multiplos.length);
    console.log(o.multiplos.length / 240);
    for (let i = 0; i < (o.multiplos.length / 240); i++) {
      const posicion = i * 240;
      const array = o.multiplos.slice(posicion, posicion + 240);
      multiplos.push(array);
    }

    console.log(multiplos);

    // Reasignamos los valores para interpretarlos en el
    // componente del generador
    this.numero = o.numero;
    this.multiplos = multiplos;
  }

}
