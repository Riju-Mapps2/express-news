import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {
  data: any;
  ngOnInit() {
    this.route.paramMap.subscribe((params: any) => {
      console.log(params.params.content);
      this.data = params.params;
      });
  }

  public constructor(private route: ActivatedRoute, private router: Router) {}

}
