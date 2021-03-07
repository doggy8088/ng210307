import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { RecentCommentsComponent } from './footer/recent-comments/recent-comments.component';
import { MaskPipe } from './mask.pipe';

@NgModule({
  declarations: [
    FooterComponent,
    AppComponent,
    HeaderComponent,
    RecentCommentsComponent,
    MaskPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
