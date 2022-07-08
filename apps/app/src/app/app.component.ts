import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Message } from '@sys-vet/api-interfaces';

@Component({
  selector: 'sys-vet-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  hello$ = this.http.get<Message>('/api/hello');
  constructor(private http: HttpClient) {}

  buttonClicked(): void {
    alert('Eventos :D');
  }
}
