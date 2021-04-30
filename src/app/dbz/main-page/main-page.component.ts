import { Component, OnInit } from '@angular/core';

import { Personaje } from '../interfaces/dbz.interface';

import { DbzService } from '../services/dbz.service';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent {


  nuevo: Personaje ={
    nombre:'Maestro Rochi',
    poder: 9000
  }

  //cambiarNombre (event:any){
  //console.log(event.target.value)
  //}

  //agregarNuevoPersonaje(argumento:Personaje){
  //  this.Personajes.push(argumento);
  //}

  constructor(){ 
    //this.Personajes = this.DbzService.Personajes;
  }
  
}
