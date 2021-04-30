import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {
  heroes: string[] = ['Spiderman','Iroman','Thor','Hulk','Capitan América'];
 heroeBorrado: string='';


  borrarHeroe():void{
    this.heroeBorrado =  this.heroes.shift() || '';
  }
}
