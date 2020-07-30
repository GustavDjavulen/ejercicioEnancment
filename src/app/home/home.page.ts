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
    console.log(o);

    // Reasignamos los valores para interpretarlos en el
    // componente del generador
    this.numero = o.numero;
    this.multiplos = o.multiplos;
  }

}
