export class Friend {
  id : number;
  name : string;
  picture : string;
  url : string;
  selected : bool;
  gameList;

  constructor(_id:number,_name:string,_picture:string,_url:string) {
    this.id = _id;
    this.name = _name;
    this.picture = _picture;
    this.url = _url;
    this.selected=false;
    this.gameList=[];
  }

  getGames() {

  }

}
