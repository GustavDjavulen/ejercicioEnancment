import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { GeneradorComponent } from './generador/generador.component';
import { SlideMenuComponent } from './slide-menu/slide-menu.component';



@NgModule({
  declarations: [
    GeneradorComponent,
    SlideMenuComponent
  ],
  exports: [
    GeneradorComponent,
    SlideMenuComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule
  ]
})
export class ComponentsModule { }
