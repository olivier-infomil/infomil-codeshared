import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { currentUser } from '../contracts/currentUser.contract';
import { LoaderService } from './loader.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  constructor(private _loader: LoaderService, private _router: Router) { }

  private defaultUser: currentUser = {
    isLoggedIn: false,
    isAdmin: false,
    userName: "Guest",
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

  userLogOut(){
    // Show loader while doing the required logout flow.
    this._loader.showLoader();

    // Reset currentUser to the default user
    this.currentUser.next(this.defaultUser);

    // Clear Cookies?

    // Hide loader when done and navigate to homepage.. Simulating with a timeout here
    setTimeout(() => {
      this._router.navigateByUrl("/");
      this._loader.hideLoader();
    }, 500);
  }

}
