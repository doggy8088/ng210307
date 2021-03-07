import { DataService } from './data.service';
/* eslint-disable max-len */
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Article } from './Article';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  search = {
    keyword: 'demo1'
  };

  data$: Observable<Article[]> = of([]);

  constructor(private datasvc: DataService) { }

  ngOnInit(): void {
    this.data$ = this.datasvc.loadArticles();
  }

  doSearch(value: string, elm?: HTMLInputElement) {
    this.search.keyword = value;
    if (elm && !value) {
      elm.value = '';
    }
  }

  deleteArticle(id: number) {
    console.log('刪除 id = ' + id + ' 的文章');
  }
}
