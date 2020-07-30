// ================================
// Servicio para el manejo de firestore
// ================================

// Importaciones necesarias
// ================================
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { environment } from '../../environments/environment';
import { Multiplo } from '../interfaces/multiplo.interface';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(
    private firestore: AngularFirestore
  ) {}

  // Función que guarda un registro
  // ================================
    // numero: valor con el cual se calcularon los multiplos
    // multiplos: matriz generada para la interpretación de los multiplos
  async guardarRegistro(numero: number, multiplos) {
    const newMultiplos = [];

    await multiplos.forEach(multiplos2 => {
      newMultiplos.push(...multiplos2);
    });

    multiplos = newMultiplos;

    // Creamos el registro ya con sus propiedades
    const registro = {
      numero,
      multiplos
    };

    // Asignamos el valor a una dirección particular
    this.firestore.doc(`registro/${numero}`).set(registro)
      .then(() => { // En dado caso todo salga bien
        console.log('se guardo el registro:', registro);
      })
      .catch(err => { // Si ocurre un error
        console.log(err);
      });
  }

  // Función para obtener los registros de la base de datos
  // ================================
    // Asigna los registros a un valor de environment
  obtenerRegistros() {

    // Lanzamos la petición para obtener la colleción de registros
    this.firestore.collection('registro').valueChanges().subscribe(registros => {

      // Una vez obtenemos los registros se los asignamos a la matriz
      // que los contendra
      environment.registros = registros;

      // Acomodamos los registros segun con el valor con el que se genero
      environment.registros.sort((a, b) => {
        if (a.numero > b.numero) {
          return 1;
        } else if (a.numero < b.numero) {
          return -1;
        } else {
          return 0;
        }
      });
    });
  }
}
