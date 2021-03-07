/* eslint-disable max-len */
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Article } from './Article';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  search = {
    keyword: 'demo1'
  };

  data: Article[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<Article[]>('/api/articles.json').subscribe(results => {
      this.data = results;
    });
  }

  doSearch(value: string, elm?: HTMLInputElement) {
    this.search.keyword = value;
    if (elm && !value) {
      elm.value = '';
    }
  }
}
