import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FirestoreService } from '../../services/firestore.service';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-slide-menu',
  templateUrl: './slide-menu.component.html',
  styleUrls: ['./slide-menu.component.scss'],
})
export class SlideMenuComponent implements OnInit {

  @Output() cargarRegistro = new EventEmitter();

  env = environment;

  constructor(
    private firestoreS: FirestoreService,
  ) {}

  ngOnInit() {
    this.firestoreS.obtenerRegistros();
  }

  cargar(o) {
    this.cargarRegistro.emit(o);
  }

}
