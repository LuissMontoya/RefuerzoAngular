import { Input, Output } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
})
export class AgregarComponent {
  @Input() nuevo: Personaje = {
    nombre: '',
    poder: 0,
  };

constructor(private DbzService: DbzService){}
  //@Output() onNuevoPersonaje: EventEmitter <Personaje> = new EventEmitter();


 // @Output() onNuevoPersonaje: EventEmitter = new EventEmitter();

  Agregar() {
    if (this.nuevo.nombre.trim().length === 0) {
      return;
    }
  this.DbzService.agregarPersonaje(this.nuevo);
    console.log(this.nuevo);
    this.limpiar();
    //this.onNuevoPersonaje.emit(this.nuevo);
    //this.personajes.push()
    //this.nuevo = {..}
    
  }

  limpiar(){
    this.nuevo = {
      nombre: '',
      poder: 0,
    };
  }
}
