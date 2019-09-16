import {Component, OnInit} from '@angular/core';
import {BreadcrumbsService} from '../services/breadcrumbs.service';

@Component({
	selector: 'breadcrumbs',
	templateUrl: './breadcrumbs.component.html'
})
export class BreadcrumbsComponent implements OnInit {


	constructor(public _breadcrumbs: BreadcrumbsService) {
		// this.breadcrumbs$ = _breadcrumbs.breadcrumbs$.asObservable();
	}

	ngOnInit() {
	}

}
