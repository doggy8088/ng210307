import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Article } from './Article';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  loadArticles() {
    return this.http.get<Article[]>('/api/articles.json');
  }

}
