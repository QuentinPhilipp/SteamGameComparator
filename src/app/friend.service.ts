import { Injectable } from '@angular/core';
import {Friend} from './friend';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FriendService {

  url;
  friends = [];

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
  }

  getAllFriends() {
    this.url = "steamapi/ISteamUser/GetFriendList/v0001/?key=AC5A292DA7F7814A9C54001E2C94D1AF&steamid=76561198085303249&relationship=friend";
    console.log(this.url);

    this.http.get(this.url)
          .subscribe(data =>
            {
        // console.log("data :",data);

        let playerList = [];

        // data.friendslist.friends
        //   data.friendslist.friends.forEach(element => {
        //     playerListString+=element.steamid+",";
        //   });


        // Create chunk of x friend to make big request instead of 1 friend at a time.
        // Max 100 friend per requests.
        let len = data.friendslist.friends.length;
        let chunk = 11;

        for (let i=0; i<len; i+=chunk) {
            let friendArray = data.friendslist.friends.slice(i,i+chunk);
            playerList.push(friendArray);
        }

        //console.log("playerList:",playerList);

        let playerListString = [];


        // Convert all chunk into strings of ID separated by commas and request the details of the friends
        playerList.forEach(list => {
          let friendsString = "";
          list.forEach(friend => {
            friendsString+=friend.steamid+","
          });

          //remove last comma
          friendsString = friendsString.substring(0, friendsString.length - 1);

          //request the details of the friends
          // Request up to 100 user in the same time : https://developer.valvesoftware.com/wiki/Steam_Web_API#GetFriendList_.28v0001.29
          // GetPlayerSummaries
          this.http.get("steamapi/ISteamUser/GetPlayerSummaries/v0002/?key=AC5A292DA7F7814A9C54001E2C94D1AF&steamids="+friendsString)
                .subscribe(dataPlayer =>
                  {
                    dataPlayer.response.players.forEach(player => {
                      const newFriend = new Friend(player.steamid,
                          player.personaname,
                          player.avatarfull,
                          player.profileurl
                          )
                      this.friends.push(newFriend)
                    });
                    // console.log("friends:",this.friends);

                  });


          // console.log(friendsString);

          playerListString.push(friendsString);
        });

        // console.log("playerListString:",playerListString);

      });
      return this.friends
    }

}
