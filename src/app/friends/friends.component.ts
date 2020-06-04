import { Component, OnInit ,Input} from '@angular/core';
import { Friend } from "../friend"
import {FriendService} from "../friend.service"


@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.css']
})
export class FriendsComponent implements OnInit {
  @Input() friend;

  constructor(private friendService:FriendService) {
    //Default value
    this.friend = new Friend(-1,"Error","assets/img/error.jpg","/")
  }

  ngOnInit(): void {
  }

  selectFriend():void
  {
    this.friendService.selectFriend(this.friend);
    
  }

  removeFriend():void
  {
    this.friendService.removeFriend(this.friend);
  }
}
