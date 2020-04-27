import { Component, OnInit } from '@angular/core';
import {GameService} from "../game-service.service";
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-input-id',
  templateUrl: './input-id.component.html',
  styleUrls: ['./input-id.component.css']
})
export class InputIdComponent implements OnInit {


  public users: any[] = [{
    id: 1,
    userID: ''
  }];

  constructor(private gameService :GameService) {

  }

  ngOnInit(): void {
  }

  addUser(form: NgForm) {
    console.log(form.value.id)
    this.users.push({
      id: this.users.length + 1,
      userID: form.value.id
    });
    this.updateCommonGame(form.value.id)
  }
  removeID(i: number) {
    this.users.splice(i, 1);
  }

  updateCommonGame(user) {
    this.gameService.updateGames(user)
  }

  logValue() {
    console.log(this.users);
  }
}
