import { Component } from '@angular/core';
import { Router } from '@angular/router';

interface AutoCompleteCompleteEvent {
  originalEvent: Event;
  query: string;
}

interface searchSuggestion {
  title: string;
  id: string;
  type: string;
  author: string;
  created: string;
}

@Component({
  selector: 'app-hp-search',
  templateUrl: './hp-search.component.html',
  styleUrls: ['./hp-search.component.scss']
})

export class HpSearchComponent {

  constructor(private _router: Router){}

  public searchVal!: searchSuggestion;

  public filteredSearch!: searchSuggestion[];


  // Mock for Suggestions 
  // technically this should be an array of articles and questions retrieved from your API,
  // should only have title, author, type, creation date and id of the artile/question, for performance don't include the other stuffs that an article or question needs.
  public suggestions: searchSuggestion[] = [
    {
      title: "How to make two way binding in Angular", id: "1", type: "article", author: "John Papa", created: "2022-01-01 10:08:56"
    },
    {
      title: "How to make a global service for your application", id: "2", type: "article", author: "Matthew Podwysocki", created: "2023-05-01 10:00:00"
    },
    {
      title: "Is two-way binding better than one-way binding?", id: "3", type: "question", author: "Misko Hevery", created: "2021-01-01 09:35:59"
    },
    {
      title: "What is better signals or RX-JS ?", id: "2", type: "question", author: "Adam Abrons", created: "2021-01-01 09:35:59"
    },
    {
      title: "React vs Vue.js, which one should you choose and why", id: "5", type: "article", author: "Jordan Walke", created: "2023-01-05 09:35:59"
    },
  ];


  search(event: AutoCompleteCompleteEvent) {
    const filtered: searchSuggestion[] = [];
    const query = event.query.toLowerCase();
  
    for (const searchedItem of this.suggestions as any[]) {
      if (searchedItem.title.toLowerCase().includes(query)) {
        filtered.push(searchedItem);
      }
    }
  
    this.filteredSearch = filtered;
  }

  openArticle(searchItem: searchSuggestion){
    if(searchItem.type === 'article'){
      this._router.navigateByUrl(`/articles/view/${searchItem.id}`);
    } else {
      this._router.navigateByUrl(`/questions/view/${searchItem.id}`);
    }
  }
}
