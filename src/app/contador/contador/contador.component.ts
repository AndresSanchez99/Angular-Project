import { Component } from '@angular/core';

@Component({
  selector: 'app-contador',
  template: `
    <h1>{{ title }}</h1>
    <button (click)="sumar()">+{{base}}</button>
    <h1>{{ numero }}</h1>
    <button (click)="restar()">-{{base}}</button>
  `,
})
export class ContadorComponent {
  title = 'Contador App';
  numero: number = 10;
  base: number = 50;

  sumar() {
    this.numero += this.base;
  }

  restar() {
    this.numero -= this.base;
  }

}
