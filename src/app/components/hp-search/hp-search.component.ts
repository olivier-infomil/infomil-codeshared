import { Component } from '@angular/core';

interface AutoCompleteCompleteEvent {
  originalEvent: Event;
  query: string;
}

@Component({
  selector: 'app-hp-search',
  templateUrl: './hp-search.component.html',
  styleUrls: ['./hp-search.component.scss']
})

export class HpSearchComponent {

  public searchVal!: string;

  public filteredSearch!: any[];

  public suggestions = [
    {
      title: "How to make two way binding in Angular", id: "1", type: "article" 
    },
    {
      title: "How to make a global service for your application", id: "2", type: "article" 
    },
    {
      title: "Is two-way binding better than one-way binding?", id: "2", type: "question" 
    },
  ]


  search(event: AutoCompleteCompleteEvent){
    let filtered: any[] = [];
    let query = event.query;

    for (let i = 0; i < (this.suggestions as any[]).length; i++) {
      let searchedItem = (this.suggestions as any[])[i];
      if (searchedItem.title.toLowerCase().indexOf(query.toLowerCase()) == 0) {
          filtered.push(searchedItem.title);
      }

      this.filteredSearch = filtered;
    }
    console.log(event.query);
  }
}
