import {Component, OnInit} from '@angular/core';
import {ModalService} from 'core';
import {ModalTestComponent} from '../modal-test/modal-test.component';

@Component({
	selector: 'app-dashboard',
	templateUrl: './dashboard.component.html',
	styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

	constructor() {
		console.log('dashboard');
	}

	ngOnInit() {
	}

}
