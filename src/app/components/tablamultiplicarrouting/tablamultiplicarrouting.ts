import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-tablamultiplicarrouting',
  standalone: false,
  templateUrl: './tablamultiplicarrouting.html',
  styleUrl: './tablamultiplicarrouting.css',
})
export class Tablamultiplicarrouting {

  public numero!: number;
  public resultados: Array<number>

  constructor(
    private _activeRoute: ActivatedRoute, 
  ){
    this.resultados = []
  }

  ngOnInit(): void {
    this._activeRoute.params.subscribe((parametros: Params)=>{
      this.numero = parseInt(parametros['numero']);
      let aux = []
      for(let i=1; i<=10; i++){
        let resultado = this.numero * i;
        aux.push(resultado)
      }
      this.resultados = aux;
    })
  }

}
