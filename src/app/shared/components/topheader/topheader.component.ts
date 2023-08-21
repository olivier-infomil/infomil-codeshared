import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivationEnd, Router } from '@angular/router';
import { Size } from 'src/app/shared/enums/size.enum';
import { LoaderService } from '../../services/loader.service';
import { currentUser } from '../../contracts/currentUser.contract';
import { GlobalService } from '../../services/global.service';

interface listActions {
  label: string,
  action: string
}

@Component({
  selector: 'app-topheader',
  templateUrl: './topheader.component.html',
  styleUrls: ['./topheader.component.scss']
})
export class TopheaderComponent implements OnInit{

  public showAccountSection!: boolean;
  public userName: string = 'Guest';
  public logoSize: Size = Size.MD;
  public currentUser!: currentUser;
  public showListAction: boolean = false;

  public guestAction: listActions[] = [
    {
      label: "Login",
      action: "login"
    },
    {
      label: "Activate Account",
      action: "activate"
    }
  ];

  public userAction: listActions[] = [
    {
      label: "Logout",
      action: "logout"
    },
    {
      label: "My Dashboard",
      action: "dashboard"
    },
    {
      label: "Notifications",
      action: "notifications"
    },
  ];

  public adminAction: listActions[] = [
    {
      label: "Logout",
      action: "logout"
    },
    {
      label: "My Dashboard",
      action: "dashboard"
    },
    {
      label: "Site administration",
      action: "administration"
    },
    {
      label: "Notifications",
      action: "notifications"
    }
  ];


  constructor(private _router: Router, private _route: ActivatedRoute, private _loader: LoaderService, private _globalService: GlobalService){
    this._router.events.subscribe( data =>{
      if (data instanceof ActivationEnd){
        this.showAccountSection = data.snapshot.data['showAccount'];
      }
    })
  }

  ngOnInit():void {
    this._globalService.$currentUser.subscribe( settings => this.currentUser = settings);
  }

  userLoggedIn():void {
    this._globalService.updateCurrentUser({
      isLoggedIn: true,
      isAdmin: true,
      userId: 1
    });
    this.userName = 'UserName';
  }

  userLoggedOut():void {
    this._globalService.updateCurrentUser({
      isLoggedIn: false,
      isAdmin: false,
      userId: 0
    });

    this.userName = 'Guest';

    this._loader.showLoader();

    setTimeout(() => {
      this._router.navigateByUrl("/");
      this._loader.hideLoader();
    }, 500);
  }

  userActionClick(event: any){

    switch (event.action) {
      case "login":
        this.userLoggedIn();
        break;

      case "logout":
        this.userLoggedOut();
        break;

      case "dashboard":
        this._router.navigateByUrl(`/user/${this.currentUser.userId}`);
        break;

      case "activate":
        this._router.navigateByUrl(`/activate`);
        break;

      case "administration":
        this._router.navigateByUrl(`/administration`);
        break;

      case "notifications":
        this._router.navigateByUrl(`/notifications`);
        break;

      default:
        break;
    }

    this.showListAction = !this.showListAction;
  }

  fnShowLogin():void {

  }
}
