import {Component, OnInit} from '@angular/core';
import {AuthenticationService, InjectToken, LocalStorage, QueryService} from 'core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {

  title = 'ngx-core';

  @InjectToken(QueryService)
  queryService: QueryService<any>;

  constructor(private storage: LocalStorage,
              private auth: AuthenticationService) {
    this.storage.set('allahyar', 'adadad', Date.now());
    if (this.storage.has('allahyar')) {
      console.log('asas');
    }
    this.auth.verifyToken('asas').then(res => {
      console.log(res);
    });
  }


  ngOnInit(): void {
    this.queryService.delete({url: ''}).subscribe(res => {
      console.log(res);
    });
  }


}
