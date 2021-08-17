import { Component } from '@angular/core';
import { Card } from 'src/app/card';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {


  cards = new Array<Card>();

  constructor() {

    this.cards.push(new Card(
      {
        'id': 1, 'name': 'Storm Ninja', 'text': 'Ninja em busca de vingança por sua família após o despertar de poderes ocultos. Suas katanas liberam poderosos raios que destroem tudo o que tocam.', 'image': '/assets/img/ninja.jpg'
      }
    ));

    this.cards.push(new Card(
      {
        'id': 2, 'name': 'Naruto', 'text': 'Naruto é um jovem órfão habitante da Vila da Folha que sonha se tornar o quinto Hokage, o maior guerreiro e governante da vila.', 'image': '/assets/img/naruto.jpg'
      }
    ));

    this.cards.push(new Card(
      {
        'id': 3, 'name': 'One Punch Man', 'text': 'Saitama, um jovem recém-desempregado, que após salvar um garoto de ser morto por um homem caranguejo, resolve se tornar herói.', 'image': '/assets/img/onePunch.jpg'
      }
    ));

    this.cards.push(new Card(
      {
        'id': 4, 'name': 'Bleach', 'text': 'Kurosaki Ichigo é um garoto de 15 anos que pode ver, tocar e falar com espíritos de pessoas mortas, o que faz dele um Shinigami.', 'image': '/assets/img/bleach.jpg'
      }
    ));
  }


  alertarClick(card: Card) {
    alert(card.id + " - " + card.name);
  }


}
