import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnDestroy {

  public requestedId!: number;

  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe( params => this.requestedId = parseInt(params['id']));
  }

  ngOnInit(): void {
    console.log('Opening profile dashboard for user ->', this.requestedId);
    // After component initialization, fetch the user's data here
    // For better performance you could also use cookies/session storage to store un-important data that can be accesed by the app without contacting the api again.
  }

  ngOnDestroy(): void {

  }
}
