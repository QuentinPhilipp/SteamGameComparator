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
  friend;
  
  constructor(private gameService :GameService, private friendService:FriendService)
  {

  }

  ngOnInit() {
    this.games = this.gameService.getAllGames();
    this.friend = this.friendService.getAllFriend();

  }





}
