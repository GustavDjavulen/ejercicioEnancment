import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { FirestoreService } from '../../services/firestore.service';
import { Multiplo } from '../../interfaces/multiplo.interface';
import { IonContent } from '@ionic/angular';

@Component({
  selector: 'app-generador',
  templateUrl: './generador.component.html',
  styleUrls: ['./generador.component.scss'],
})
export class GeneradorComponent implements OnInit {

  @ViewChild(IonContent, {static: true}) iContent: IonContent;

  @Input() valor = 0;
  @Input() multiplos: any[] = [];

  pagina = 1;

  emptyText = new Array(81);

  constructor(
    private firestoreS: FirestoreService
  ) {}

  ngOnInit() {}

  // Funcion que genera los multiplos
  generarMultipos() {

    // Revisamos si se ha ingresado un valor
    if (this.valor) {

      // Vaciamos la matriz con los multiplos
      this.multiplos = [];
      let multiplos = [];

      for (let i = 0; i <= this.valor; i++) {

        // Cramos un multiplo nullo
        const multiplo: Multiplo = {
          numero: 0,
          color: 'dark',
          multiplos: []
        };

        // Le asignamos su numero
        multiplo.numero = i;

        // ================================
        // Si al calcular el residuo de un numero da 0
        // Eso significa que es multiplo de ese numero
        // ================================

        // Revisamos si es multiplo de 7
        if ((i % 7) === 0) {
          multiplo.multiplos.push(7);
          multiplo.color = 'primary';
        }

        // Revisamos si es multiplo de 5
        if ((i % 5) === 0) {
          multiplo.multiplos.push(5);
          multiplo.color = 'danger';
        }

        // Revisamos si es multiplo de 3
        if ((i % 3) === 0) {
          multiplo.multiplos.push(3);
          multiplo.color = 'warning';
        }

        // ================================
        // Se realizo de mayor a menos para asegurarme
        // De asignar el color del menor multiplo
        // ================================

        // Por ultimo empujamos el multiplo a una matriz
        // ================================
        multiplos.push(multiplo);

        if (multiplos.length === 240) {
          this.multiplos.push(multiplos);
          multiplos = [];
        }
      }
      if (multiplos.length % 240 !== 0) {
        this.multiplos.push(multiplos);
      }
      console.log(this.multiplos);

      // Guardamos el registro en la base de datos
      // ================================
      this.guardarRegistro();
    }
  }

  // Función que guarda el registro del multiplo
  guardarRegistro() {
    this.firestoreS.guardarRegistro(this.valor, this.multiplos);
  }

}
