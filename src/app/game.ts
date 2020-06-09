export class Game {
  id : number;
  name : string;
  picture : string;


  constructor(_id:number,_name:string,_picture:string) {
    this.id = _id;
    this.name = _name;
    this.picture = _picture
    this.link="https://store.steampowered.com/app/"+this.id;
  }
}
