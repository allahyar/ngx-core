import {Component, OnInit} from '@angular/core';
import {ControlContainer, NgForm} from '@angular/forms';
import {Observable, Subscription} from 'rxjs';
import {Modal} from 'core';
import {ModalTest2Component} from '../modal-test2/modal-test2.component';

@Component({
	templateUrl: './modal-test.component.html',
	viewProviders: [{provide: ControlContainer, useExisting: NgForm}]
})
export class ModalTestComponent extends Modal implements OnInit {


	ngOnInit() {

	}

	onSave(data: any): Subscription {

		return new Observable(observer => {
			setTimeout(() => {
				observer.complete();
				// this.modalRef.close();
				this.modalService.open(ModalTest2Component, {title: 'New User 2', data: {success: true}});

			}, 4000);
		}).subscribe(res => {
			console.log(res);
		});
	}

}
