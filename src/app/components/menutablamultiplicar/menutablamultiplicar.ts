import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-tablamultiplicar',
  standalone: false,
  templateUrl: './menutablamultiplicar.html',
  styleUrl: './menutablamultiplicar.css',
})
export class Menutablamultiplicar {

  public numeros: Array<number>;

  constructor(){
    this.numeros = []
  }

  ngOnInit(): void{
    this.generarArray();
  }

  generarArray(): void{
    let aux = [];
    for(let i=0; i<=5; i++){
      let numero = Math.floor(Math.random()*100);
      aux.push(numero)
    }
    this.numeros = aux;
  }

}
