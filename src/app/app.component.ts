import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  data = {
    keyword: 'demo1'
  };

  doSearch(value: string, elm?: HTMLInputElement) {
    this.data.keyword = value;
    if (elm && !value) {
      elm.value = '';
    }
  }
}
