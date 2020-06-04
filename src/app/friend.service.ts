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
export class FriendService {

  url;

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
  }

  getAllFriend() {
    this.url = "steamapi/ISteamUser/GetFriendList/v0001/?key=AC5A292DA7F7814A9C54001E2C94D1AF&steamid=76561198085303249&relationship=friend";
    console.log(this.url);

    this.http.get(this.url)
          .subscribe(data =>
            {
        console.log("data :",data);

        let playerListString = "";

        if (data.friendslist.friends.length <100){
          data.friendslist.friends.forEach(element => {
            playerListString+=element.steamid+",";

          });
        }
        // Request up to 100 user in the same time : https://developer.valvesoftware.com/wiki/Steam_Web_API#GetFriendList_.28v0001.29
        // GetPlayerSummaries

        // this.http.get("steamapi/ISteamUser/GetPlayerSummaries/v0002/?key=AC5A292DA7F7814A9C54001E2C94D1AF&steamids=76561197960435530")
        //       .subscribe(dataPlayer =>
        //         {
        //           console.log("dataPlayer:",dataPlayer);
        //         });

        //remove last comma
        playerListString = playerListString.substring(0, playerListString.length - 1);

        console.log(playerListString);

        this.http.get("steamapi/ISteamUser/GetPlayerSummaries/v0002/?key=AC5A292DA7F7814A9C54001E2C94D1AF&steamids="+playerListString)
              .subscribe(dataPlayer =>
                {
                  console.log("dataPlayer:",dataPlayer);
                });

        // http://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=XXXXXXXXXXXXXXXXXXXXXXX&steamids=76561197960435530
      });
    }


}
