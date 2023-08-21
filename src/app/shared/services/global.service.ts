import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { currentUser } from '../contracts/currentUser.contract';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  constructor() { }

  private defaultUser: currentUser = {
    isLoggedIn: false,
    isAdmin: false,
    userId: 0
  }

  private currentUser = new BehaviorSubject<currentUser>(this.defaultUser);

  public $currentUser = this.currentUser.asObservable();

  getCurrentUrl(){
    let protocol = window.location.protocol;
    let hostName = window.location.hostname;
    return `${protocol}//${hostName}`;
  }

  updateCurrentUser(settings: currentUser){
    this.currentUser.next(settings);
  }

}
