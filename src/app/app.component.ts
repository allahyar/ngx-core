import {Component, Injector, OnInit} from '@angular/core';
import {Inject, Query, QueryService} from 'core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {

  title = 'ngx-core';

  @Inject(QueryService)
  queryService: QueryService<any>;

  constructor() {
  }


  ngOnInit(): void {
    this.queryService.delete({url: ''}).subscribe(res => {
      console.log(res);
    });
  }


}
