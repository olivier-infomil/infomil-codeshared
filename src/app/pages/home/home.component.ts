import { Component, OnInit } from '@angular/core';
import { currentUser } from 'src/app/shared/contracts/currentUser.contract';
import { GlobalService } from 'src/app/shared/services/global.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public currentUser!: currentUser;

  constructor(private _globalService: GlobalService){}

  ngOnInit(){
    this._globalService.$currentUser.subscribe( settings => {
      this.currentUser = settings;
    });
  }
}
