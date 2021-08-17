import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',

})
export class DataBindingComponent {

  public contadorClique: number = 0;
  public nome: string = "";
  public urlImagem: string = "/assets/img/goku-4k-nawpic-8-scaled.jpg";


  addClique() {
    this.contadorClique++;
  }

  zerarContador() {
    this.contadorClique = 0;
  }

  infoImage() {
    alert("Oi! Eu sou o GOKU! Você clicou " + this.contadorClique + " vezes!");
  }

  // Método para Two-Way Binding

  // keyUp(event: any) {
  //   this.nome = event.target.value;
  // }
}
