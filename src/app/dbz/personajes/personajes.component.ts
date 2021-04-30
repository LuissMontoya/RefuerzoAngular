import { Component, Input, OnInit } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';

import { DbzService } from '../services/dbz.service';
@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html'
})
export class PersonajesComponent  {

  //@Input() Personajes:Personaje []= [];
  get Personajes(){
    return this.DbzService.Personajes;
  }
  
  constructor(private DbzService: DbzService){ }
}
