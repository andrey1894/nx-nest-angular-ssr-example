import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

import { environment } from '../environments/environment';

@Component({
  selector: 'nx-nest-angular-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {

  title = ''

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    this.http.get<{ message: string }>(`${environment.api}api`).subscribe(res => {
      console.log('res', res)
      this.title = res?.message
    });

  }

}
