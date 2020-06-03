import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { GameService } from "./game-service.service";
import { FriendService } from "./friend.service";
import { GameComponent } from './game/game.component';
import { InputIdComponent } from './input-id/input-id.component';
import { HttpClientModule } from '@angular/common/http';
import { FriendsComponent } from './friends/friends.component';


@NgModule({
  declarations: [
    AppComponent,
    GameComponent,
    InputIdComponent,
    FriendsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [
    GameService,
    FriendService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
