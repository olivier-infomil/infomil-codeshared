import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { GlobalService } from './global.service';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private _http: HttpClient, private _globalService: GlobalService) { }

  private currentUrl: string = this._globalService.getCurrentUrl();

  getArticlesQuestionsList(){
    return this._http.get(`${this.currentUrl}:5200/articles-questions`);
  }
}
