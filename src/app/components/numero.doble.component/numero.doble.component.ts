import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-numero.doble.component',
  standalone: false,
  templateUrl: './numero.doble.component.html',
  styleUrl: './numero.doble.component.css',
})
export class NumeroDobleComponent implements OnInit {

  public numero!: number;
  public doble: number;

  constructor(private _activeRoute: ActivatedRoute){
    this.doble = 0;
  }

  ngOnInit(): void {
    this._activeRoute.params.subscribe((parametros: Params)=>{
      if(parametros['numero'] != null){
        this.numero = parseInt(parametros['numero']);
        this.doble = this.numero * 2;
      }
    })
  }

}
