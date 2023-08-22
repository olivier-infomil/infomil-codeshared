import { Component } from '@angular/core';
import { LoaderService } from '../../services/loader.service';
import { currentUser } from '../../contracts/currentUser.contract';
import { GlobalService } from '../../services/global.service';
import { MenuItem } from 'primeng/api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-menu',
  templateUrl: './user-menu.component.html',
  styleUrls: ['./user-menu.component.scss']
})
export class UserMenuComponent {

  constructor(private _router: Router, private _loader: LoaderService, private _globalService: GlobalService){}

  public currentUser!: currentUser;
  public userMenuItems!: MenuItem[];

  public guestAction: MenuItem[] = [
    {
      label: "Login",
      icon: "pi pi-sign-in",
      command:()=>{
        this.userActionClick('login');
      }
    },
    {
      label: "Activate Account",
      icon: "pi pi-key",
      command:()=>{
        this.userActionClick('activate');
      }
    }
  ];

  public userAction: MenuItem[] = [
    {
      label: "My Dashboard",
      icon: "pi pi-home",
      command:()=>{
        this.userActionClick('dashboard');
      }
    },
    {
      label: "Notifications",
      icon: "pi pi-bell",
      command:()=>{
        this.userActionClick('notifications');
      }
    },
    {
      label: "Logout",
      icon: "pi pi-sign-out",
      command:()=>{
        this.userActionClick('logout');
      }
    }
  ];

  public adminAction: MenuItem[] = [
    {
      label: "My Dashboard",
      icon: "pi pi-home",
      command:()=>{
        this.userActionClick('dashboard');
      }
    },
    {
      label: "Site administration",
      icon: "pi pi-cog",
      command:()=>{
        this.userActionClick('administration');
      }
    },
    {
      label: "Notifications",
      icon: "pi pi-bell",
      command:()=>{
        this.userActionClick('notifications');
      }
    },
    {
      label: "Logout",
      icon: "pi pi-sign-out",
      command:()=>{
        this.userActionClick('logout');
      }
    },
  ];

  ngOnInit():void {
    this._globalService.$currentUser.subscribe( settings => {
      this.currentUser = settings;

        if(!this.currentUser.isLoggedIn){
          this.userMenuItems = this.guestAction;
        }

        if(this.currentUser.isLoggedIn && !this.currentUser.isAdmin){
          this.userMenuItems = this.userAction;
        }

        if(this.currentUser.isLoggedIn && this.currentUser.isAdmin){
          this.userMenuItems = this.adminAction;
        }
    });
  }

  userLoggedIn():void {
    this._globalService.updateCurrentUser({
      isLoggedIn: true,
      isAdmin: false,
      userName: "John Smith",
      userId: 1
    });
  }

  userLoggedOut():void {
    this._globalService.userLogOut();
  }

  userActionClick(action: string){

    switch (action) {
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
        this._router.navigateByUrl(`/admin`);
        break;

      case "notifications":
        this._router.navigateByUrl(`/notifications`);
        break;

      default:
        break;
    }

  }

  showLogin():void {

  }

}
