import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ActivationEnd, Router } from '@angular/router';
import { Size } from 'src/app/shared/enums/size.enum';

@Component({
  selector: 'app-topheader',
  templateUrl: './topheader.component.html',
  styleUrls: ['./topheader.component.scss']
})
export class TopheaderComponent {

  public showAccountSection!: boolean;

  public logoSize: Size = Size.MD;


  constructor(private _router: Router, private _route: ActivatedRoute){
    this._router.events.subscribe( data =>{
      if (data instanceof ActivationEnd){
        this.showAccountSection = data.snapshot.data['showAccount'];
      }
    })
  }

  fnShowLogin():void {

  }
}
