import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { BirdDetailComponent } from './bird-detail/bird-detail.component';
import { FormsModule } from '@angular/forms';
import { BirdsComponent } from './birds/birds.component';
import { BirdSearchComponent } from './bird-search/bird-search.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MessagesComponent } from './messages/messages.component';

@NgModule({
  declarations: [
    AppComponent,
    BirdDetailComponent,
    BirdsComponent,
    BirdSearchComponent,
    DashboardComponent,
    MessagesComponent,
  ],
  imports: [BrowserModule, FormsModule, HttpClientModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
