import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'turner-townsend-challenge';

  constructor(private http: HttpClient) {
    console.log(environment.api_endpoint);

    this.http.get(environment.api_endpoint)
      .subscribe((data) => {
      });
  }
}
