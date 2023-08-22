import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivationEnd, Router } from '@angular/router';
import { Size } from 'src/app/shared/enums/size.enum';
import { LoaderService } from '../../services/loader.service';
import { currentUser } from '../../contracts/currentUser.contract';
import { GlobalService } from '../../services/global.service';
import { MenuItem } from 'primeng/api';


@Component({
  selector: 'app-topheader',
  templateUrl: './topheader.component.html',
  styleUrls: ['./topheader.component.scss']
})
export class TopheaderComponent implements OnInit{

  public showAccountSection!: boolean;
  public logoSize: Size = Size.MD;
  public currentUser!: currentUser;

  constructor(private _router: Router, private _route: ActivatedRoute, private _loader: LoaderService, private _globalService: GlobalService){
    this._router.events.subscribe( data =>{
      if (data instanceof ActivationEnd){
        this.showAccountSection = data.snapshot.data['showAccount'];
      }
    })
  }

  ngOnInit():void {
    this._globalService.$currentUser.subscribe( settings => {
      this.currentUser = settings;
    });
  }
}
