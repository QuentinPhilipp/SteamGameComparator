import { Component, OnInit } from '@angular/core';
import {GameService} from "./game-service.service"
import {FriendService} from "./friend.service"
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {


  userID;
  games = [];
  friends = [];
  selectedFriends = [];
  displayedFriends=[];
  gameState=false;

  constructor(private gameService :GameService, private friendService:FriendService)
  {
    //this.friends = this.friendService.getAllFriends();
    // this.friendService.getAllFriends().subscribe(
    //   dataa => { console.log(dataa); this.friends = dataa; }
    //   , errr => { console.log(errr); }
    // )
    //this.selectedfriends=this.friendService.getSelectedFriends();
  }


  ngOnInit() {
    //this.games = this.gameService.getAllGames();
    //this.friends = this.friendService.getAllFriends();
    //this.selectedfriends=this.friendService.getSelectedFriends();
  }


  setUser(form: NgForm) {
    this.userID = form.value.id;
    console.log("User ID : ", this.userID);

    this.friends = this.friendService.getAllFriends(this.userID);
    this.displayedFriends= this.friends;
    this.selectedFriends=this.friendService.getSelectedFriends();
    this.games = this.gameService.getAllGames(this.selectedFriends);
    console.log("User friends : ", this.displayedFriends);

  }


  getCommonGame() {
    this.games = this.gameService.getAllGames(this.selectedFriends);
    console.log("Games : ",this.games);
    this.displayedFriends=[];
    this.gameState=true;
    //document.getElementById("friends-list").style.visibility="hidden";
  }



}
