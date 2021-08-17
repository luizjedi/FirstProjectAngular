export class Card {
  id: number;
  name: string;
  text: string;
  image: string;

  constructor(p: any) {

    this.id = p.id != undefined ? p.id : null;
    this.name = p.name != undefined ? p.name : null;
    this.text = p.text != undefined ? p.text : null;
    this.image = p.image != undefined ? p.image : null;
  }
}