import {Component, OnInit} from '@angular/core';
import {AuthenticationService, InjectToken, LocalStorage, QueryService, UiService} from 'core';
import {TranslateService} from '@ngx-translate/core';


@Component({
	selector: 'app-root',
	templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {

	title = 'ngx-core';

	@InjectToken(QueryService)
	queryService: QueryService<any>;

	constructor(private storage: LocalStorage,
				private uiService: UiService,
				private translate: TranslateService,
				private auth: AuthenticationService) {

		// this.translate.addLangs(['en', 'fa']);
		// this.translate.setDefaultLang('en');
		this.translate.use('en').subscribe(res => console.log);

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

		setTimeout(() => {
			this.uiService.setDirection('ltr');
		}, 2000);

		setTimeout(() => {
			this.uiService.setDirection('rtl');
		}, 4000);


		console.log(this.uiService.direction);

	}


}
