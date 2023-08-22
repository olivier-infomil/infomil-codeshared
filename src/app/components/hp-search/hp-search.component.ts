import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SearchService } from 'src/app/shared/services/search.service';
import { searchSuggestion } from 'src/app/shared/contracts/searchSuggestions.contract';

interface AutoCompleteCompleteEvent {
  originalEvent: Event;
  query: string;
}

@Component({
  selector: 'app-hp-search',
  templateUrl: './hp-search.component.html',
  styleUrls: ['./hp-search.component.scss']
})

export class HpSearchComponent implements OnInit {

  constructor(private _router: Router, private _searchService: SearchService){}

  public searchVal!: searchSuggestion;

  public filteredSearch!: searchSuggestion[];

  public suggestions!: searchSuggestion[];


  ngOnInit(): void {
    this._searchService.getArticlesQuestionsList().subscribe({
      next: (data: searchSuggestion[]) => {
        this.suggestions = data;
      },
      error: (err) => {
        console.log('Error Contacting API', err);
        this._router.navigateByUrl("/408");
      }
    });
  }

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
