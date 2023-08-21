import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { currentUser } from 'src/app/shared/contracts/currentUser.contract';
import { GlobalService } from 'src/app/shared/services/global.service';
@Component({
  selector: 'app-hp-subheader',
  templateUrl: './hp-subheader.component.html',
  styleUrls: ['./hp-subheader.component.scss']
})
export class HpSubheaderComponent implements OnInit {

  public currentUser!: currentUser;

  constructor(private _router: Router, private _globalService: GlobalService){}
  
  ngOnInit(): void {
    this._globalService.$currentUser.subscribe( settings => this.currentUser = settings);
  }

  navigateTo(route: string){
    this._router.navigateByUrl(`/${route}`);
  }

}
