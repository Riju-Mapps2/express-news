import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(private httpClient: HttpClient, public router: Router) {}
  data: any = {
    articles: [{
    }]
  };
  ngOnInit() {
    this.httpClient.get('https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=9afc89e89a0d439c9dbe6bbd3f81bf0b')
    .subscribe(data => {
      this.data = data;
    });
  }

  showDetail(data: any) {
    this.router.navigate(['/list', data]);
  }

}
