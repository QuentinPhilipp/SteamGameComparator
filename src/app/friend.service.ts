import { Injectable } from '@angular/core';
import {Game} from './game';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { forkJoin } from 'rxjs';
import { shareReplay } from 'rxjs/operators';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class FriendService {

  url;

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
  }

  getAllFriend() {
    this.url = "steamapi/ISteamUser/GetFriendList/v0001/?key=AC5A292DA7F7814A9C54001E2C94D1AF&steamid=76561198085303249&relationship=friend";
    console.log(this.url);

    this.http.get(this.url)
          .subscribe(data =>
            {
        console.log("data :",data);
      });
    }


}
