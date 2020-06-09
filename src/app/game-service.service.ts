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

    commonGameList = [];
    gameListID = [];

    inCommon;
    url = "/steamapi/IPlayerService/GetOwnedGames/v0001/?key=AC5A292DA7F7814A9C54001E2C94D1AF&steamid=76561198115370162&include_appinfo=1&include_played_free_game=1&format=json";
    response;
    games : Game[] =[];

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
  }

  findDuplicates(arrays)
  {
    //Get the smallest array
    let smallestArray = undefined;
    let smallestLength =  0;
    arrays.forEach(array => {
      if(array.length>smallestLength)
      {
        smallestArray=array;
        smallestLength=array.length;
      }

    });



    let sorted_arr = array.slice().sort(); // You can define the comparing function here.
    // JS by default uses a crappy string compare.
    // (we use slice to clone the array so the
    // original array won't be modified)
    let results = [];
    for (let i = 0; i < sorted_arr.length - 1; i++) {
      if (sorted_arr[i + 1] == sorted_arr[i]) {
        results.push(sorted_arr[i]);
      }
    }
    return results;
  }


  getAllGames(users) {
    console.log(users);
    let gameCollection = [];
    let gameCollectionList = [];

    this.gameList=[];

    users.forEach(user => {
      // let url = "/steamapi/IPlayerService/GetOwnedGames/v0001/?key=AC5A292DA7F7814A9C54001E2C94D1AF&steamid="+user+"&include_appinfo=1&include_played_free_game=1&format=json";

      let url = "/steamapi/IPlayerService/GetOwnedGames/v0001/?key=AC5A292DA7F7814A9C54001E2C94D1AF&steamid="+user.id+"&include_appinfo=1&include_played_free_game=1&format=json";
      console.log("Request : ",url);
      this.http.get(url)
            .subscribe(data =>
              {
                console.log(data);
                data.response.games.forEach(game => {

                  const newGame = new Game(game.appid,
                      game.name,
                      "http://media.steampowered.com/steamcommunity/public/images/apps/"+game.appid+"/"+game.img_logo_url+".jpg"
                      )


                  if(this.gameListID.indexOf(newGame.id)>-1)
                  {
                    this.commonGameList.push(newGame);
                  }
                  this.gameListID.push(newGame.id);

                });
              });

    });
    console.log("Common games :",this.commonGameList);

    return this.commonGameList;
  }


  // updateGames(user)
  // {
  //   console.log(user);
  //   this.url = "/steamapi/IPlayerService/GetOwnedGames/v0001/?key=AC5A292DA7F7814A9C54001E2C94D1AF&steamid="+user+"&include_appinfo=1&include_played_free_game=1&format=json";
  //   console.log(this.url);
  //
  //   this.http.get(this.url)
  //         .subscribe(data =>
  //           {
  //       console.log("data :",data);
  //       if (this.games.length==0) {
  //         console.log("First User");
  //         data.response.games.forEach(game => {
  //           console.log(game);
  //           const newGame = new Game(game.appid,
  //               game.name,
  //               "http://media.steampowered.com/steamcommunity/public/images/apps/"+game.appid+"/"+game.img_logo_url+".jpg"
  //               )
  //           console.log("http://media.steampowered.com/steamcommunity/public/images/apps/"+game.appid+"/"+game.img_logo_url+".jpg")
  //           //this.games.push(newGame)
  //         });
  //       }
  //       else
  //       { //only display common games
  //         console.log("Second User");
  //         console.log(data)
  //         this.commonGameList=[];
  //         this.gameList=data.response.games
  //         console.log("response :",this.gameList);
  //         this.gameList.forEach(game => {
  //           console.log(game);
  //           this.games.forEach(gameAlreadyIn => {
  //             if (gameAlreadyIn.id == game.appid) {
  //               const newGame = new Game(game.appid,
  //                   game.name,
  //                   "http://media.steampowered.com/steamcommunity/public/images/apps/"+game.appid+"/"+game.img_logo_url+".jpg"
  //                   )
  //               this.commonGameList.push(newGame)
  //             }
  //           });
  //         });
  //         console.log("New List : ",this.commonGameList)
  //         //this.games = this.commonGameList;
  //
  //       }
  //
  //   });
  // }
  //



  // updateGames(user)
  // {
  //   console.log(user);
  //   this.url = "/steamapi/IPlayerService/GetOwnedGames/v0001/?key=AC5A292DA7F7814A9C54001E2C94D1AF&steamid="+user+"&include_appinfo=1&include_played_free_game=1&format=json";
  //
  //
  //
  //   this.http.get("/steamapi/IPlayerService/GetOwnedGames/v0001/?key=AC5A292DA7F7814A9C54001E2C94D1AF&steamid="+user+"&include_appinfo=1&include_played_free_game=1&format=json")
  //       .subscribe(response => console.log(response));
  // }


}
