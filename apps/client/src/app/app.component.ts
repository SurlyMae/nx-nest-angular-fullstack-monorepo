import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Message } from '@fullstack-monorepo/api-interfaces';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private http: HttpClient) {}

  title = 'Birdwatching';

  hello$ = this.http.get<Message>('/api/hello');
}
