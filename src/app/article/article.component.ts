import { Article } from './../Article';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  @Input()
  item!: Article;

  @Output() delete = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  doDelete() {
    this.delete.emit(this.item.id);
  }

}
