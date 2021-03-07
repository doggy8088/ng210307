import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { RecentCommentsComponent } from './footer/recent-comments/recent-comments.component';
import { MaskPipe } from './mask.pipe';
import { ArticleComponent } from './article/article.component';

@NgModule({
  declarations: [
    FooterComponent,
    AppComponent,
    HeaderComponent,
    RecentCommentsComponent,
    MaskPipe,
    ArticleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
