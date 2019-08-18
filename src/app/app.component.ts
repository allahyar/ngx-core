import {Component, OnInit} from '@angular/core';
import {Inject, LocalStorage, QueryService} from 'core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {

  title = 'ngx-core';

  @Inject(QueryService)
  queryService: QueryService<any>;

  constructor(private storage: LocalStorage) {
  }


  ngOnInit(): void {
    this.queryService.delete({url: ''}).subscribe(res => {
      console.log(res);
    });
  }


}
