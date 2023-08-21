import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { GlobalService } from './global.service';
import { article } from '../contracts/articles.contract';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor(private _http: HttpClient, private _globalService: GlobalService) { }


  private currentUrl: string = this._globalService.getCurrentUrl();


  createArticle(data: article){

  }

  readArticle(id: number){

  }

  updateArticle(id: number, data: article){

  }

  deleteArticle(id: number){

  }

  getArticlesList(){

  }

}
