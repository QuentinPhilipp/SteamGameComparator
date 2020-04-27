import { Injectable } from '@angular/core';
import {Game} from './game';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { forkJoin } from 'rxjs';
import { shareReplay } from 'rxjs/operators';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class GameService {
    //it is possible to add for each product a description

    commonGameList;
    gameList = [];
    inCommon;
    url = "/steamapi/IPlayerService/GetOwnedGames/v0001/?key=AC5A292DA7F7814A9C54001E2C94D1AF&steamid=76561198115370162&include_appinfo=1&include_played_free_game=1&format=json";
    response;
    games : Game[] =[];

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
  }

  getAllGames() {
    return this.games;
  }


  updateGames(user)
  {
    console.log(user);
    this.url = "/steamapi/IPlayerService/GetOwnedGames/v0001/?key=AC5A292DA7F7814A9C54001E2C94D1AF&steamid="+user+"&include_appinfo=1&include_played_free_game=1&format=json";

    this.http.get(this.url).toPromise().then(data => {
        console.log(this.url);

        if (this.games.length==0) {
          console.log("First User");
          data.response.games.forEach(game => {
            console.log(game);
            const newGame = new Game(game.appid,
                game.name,
                "http://media.steampowered.com/steamcommunity/public/images/apps/"+game.appid+"/"+game.img_logo_url+".jpg"
                )
            console.log("http://media.steampowered.com/steamcommunity/public/images/apps/"+game.appid+"/"+game.img_logo_url+".jpg")
            this.games.push(newGame)
          });
        }
        else
        { //only display common games
          console.log("Second User");
          console.log(data)
          this.commonGameList=[];
          this.gameList=data.response.games
          console.log("response :",this.gameList);
          this.gameList.forEach(game => {
            console.log(game);
            this.games.forEach(gameAlreadyIn => {
              if (gameAlreadyIn.id == game.appid) {
                const newGame = new Game(game.appid,
                    game.name,
                    "http://media.steampowered.com/steamcommunity/public/images/apps/"+game.appid+"/"+game.img_logo_url+".jpg"
                    )
                this.commonGameList.push(newGame)
              }
            });
          });
          console.log("New List : ",this.commonGameList)
          this.games = this.commonGameList;

        }

    });
  }

}
