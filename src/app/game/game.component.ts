import { Component, OnInit,Input } from '@angular/core';
import { Game } from "../game"
import {GameService} from "../game-service.service"

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  @Input() game;

  constructor()
  {
    //default value
    this.game = new Game(-1,'Error Game',"assets/img/error.jpg");
  }

  ngOnInit() {

  }


}
