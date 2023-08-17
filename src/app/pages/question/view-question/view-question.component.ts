import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-question',
  templateUrl: './view-question.component.html',
  styleUrls: ['./view-question.component.scss']
})
export class ViewQuestionComponent {

  public requestedId!: number;

  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe( params => this.requestedId = parseInt(params['id']));
  }

  ngOnInit(): void {
    console.log('Opening question with Id ->', this.requestedId);
    // After component initialization, fetch the user's data here
    // For better performance you could also use cookies/session storage to store un-important data that can be accesed by the app without contacting the api again.
  }
}
