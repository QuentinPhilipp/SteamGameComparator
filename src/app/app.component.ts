import { Component, OnInit } from '@angular/core';
import {GameService} from "./game-service.service"
import {FriendService} from "./friend.service"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {


  games;
  friends;

  constructor(private gameService :GameService, private friendService:FriendService)
  {
    this.friends = this.friendService.getAllFriends();
    // this.friendService.getAllFriends().subscribe(
    //   dataa => { console.log(dataa); this.friends = dataa; }
    //   , errr => { console.log(errr); }
    // )
  }


  ngOnInit() {
    this.games = this.gameService.getAllGames();
    this.friends = this.friendService.getAllFriends();

  }





}
