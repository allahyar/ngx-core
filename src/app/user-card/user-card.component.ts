import {Component, OnInit} from '@angular/core';
import {BreadcrumbsService} from 'core';

@Component({
	selector: 'app-user-card',
	templateUrl: './user-card.component.html'
})
export class UserCardComponent implements OnInit {

	constructor(private _breadcrumbs: BreadcrumbsService) {	}

	ngOnInit() {
		this._breadcrumbs.store('id', 'ok');
	}

}
