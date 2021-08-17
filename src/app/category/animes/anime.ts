export class Anime {
  
  description: string;
  synopsis: string;
  name: string;
  size: String;
  image: string;

  constructor(p: any) {

    this.description = p.description != undefined ? p.description : null;
    this.synopsis = p.synopsis != undefined ? p.synopsis : null;
    this.name = p.name != undefined ? p.name : null;
    this.size = p.size != undefined ? p.size : null;
    this.image = p.image != undefined ? p.image : null;
  }
  
}