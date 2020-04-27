import { Component, OnInit } from '@angular/core';
import {GameService} from "./game-service.service"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {


  games;

  constructor(private gameService :GameService)
  {

  }

  ngOnInit() {
    this.games = this.gameService.getAllGames();
  }





}
