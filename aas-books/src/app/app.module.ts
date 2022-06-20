import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NewPostTabComponent } from './new-post-tab/new-post-tab.component';
import { DashboardTabComponent } from './dashboard-tab/dashboard-tab.component';
import { PostsListComponent } from './new-post-tab/posts-list/posts-list.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NewPostTabComponent,
    DashboardTabComponent,
    PostsListComponent
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
