import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { currentUser } from 'src/app/shared/contracts/currentUser.contract';
import { GlobalService } from 'src/app/shared/services/global.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnDestroy {

  public currentUser!: currentUser;
  public requestedId!: number;

  constructor(private _route: ActivatedRoute, private _router: Router, private _globalService: GlobalService) {
    this._route.params.subscribe( params => this.requestedId = parseInt(params['id']));
  }

  ngOnInit(): void {

    this._globalService.$currentUser.subscribe( settings => {
      this.currentUser = settings;

      if(this.currentUser.userId !== this.requestedId){
        this._router.navigateByUrl("401")
      }
    });

    console.log('Opening profile dashboard for user ->', this.requestedId);
    // After component initialization, fetch the user's data here, you can also use service based state management to store some infos if needed.

  }

  ngOnDestroy(): void {

  }
}
