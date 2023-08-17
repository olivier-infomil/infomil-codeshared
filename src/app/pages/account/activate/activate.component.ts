import { Component } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-activate',
  templateUrl: './activate.component.html',
  styleUrls: ['./activate.component.scss']
})
export class ActivateComponent {

  public requestedKey!: string;
  public userId!: number;

  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe( params => {
      this.requestedKey = params['key'];
      this.userId = params['id']
    });
  }

  ngOnInit(): void {
    console.log(`Asking to activate account with id : ${this.userId} using the following key : ${this.requestedKey}`);
  }

  ngOnDestroy(): void {

  }
}
