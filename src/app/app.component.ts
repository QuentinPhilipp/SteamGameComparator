import { Component, OnInit } from '@angular/core';
import {GameService} from "./game-service.service"
import {FriendService} from "./friend.service"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {


  userID;
  games;
  friends = [];
  selectedfriends = [];

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
    this.games = this.gameService.getAllGames();
    //this.friends = this.friendService.getAllFriends();
    //this.selectedfriends=this.friendService.getSelectedFriends();
  }


  setUser(form: NgForm) {
    this.userID = form.value.id;
    console.log("User ID : ", this.userID);

    this.friends = this.friendService.getAllFriends(this.userID);
    this.selectedfriends=this.friendService.getSelectedFriends();
  }

  searchCommonGame() {
    
  }

}
