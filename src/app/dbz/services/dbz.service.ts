import { Injectable } from '@angular/core';

import { Personaje } from '../interfaces/dbz.interface';

@Injectable()
export class DbzService {
  private _Personajes: Personaje[] = [
    {
      nombre: 'Gokú',
      poder: 15000,
    },
    {
      nombre: 'Vegeta',
      poder: 8500,
    },
  ];

  get Personajes(): Personaje[] {
    return [...this._Personajes];
  }

  constructor() {}

  agregarPersonaje(Personaje: Personaje) {
    this._Personajes.push(Personaje);
  }
}
