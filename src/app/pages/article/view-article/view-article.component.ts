import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-article',
  templateUrl: './view-article.component.html',
  styleUrls: ['./view-article.component.scss']
})
export class ViewArticleComponent {

  public requestedId!: number;

  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe( params => this.requestedId = parseInt(params['id']));
  }

  ngOnInit(): void {
    console.log('Opening article with Id ->', this.requestedId);
    // After component initialization, fetch the user's data here
    // For better performance you could also use cookies/session storage to store un-important data that can be accesed by the app without contacting the api again.
  }

}
