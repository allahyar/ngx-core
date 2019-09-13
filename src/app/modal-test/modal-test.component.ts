import {Component, OnInit} from '@angular/core';
import {ControlContainer, NgForm} from '@angular/forms';
import {Observable} from 'rxjs';
import {Modal} from 'core';
import {ModalTest2Component} from '../modal-test2/modal-test2.component';

@Component({
	templateUrl: './modal-test.component.html',
	viewProviders: [{provide: ControlContainer, useExisting: NgForm}]
})
export class ModalTestComponent extends Modal implements OnInit {


	ngOnInit() {

	}

	onSave(data: any): any {
		console.log(data);
		this.reqObservable = new Observable(observer => {
			setTimeout(() => {
				observer.complete();
				// this.modalRef.close();
				this.modalRef.open(ModalTest2Component, {title: 'New User 2', data: {success: true}});

			}, 4000);
		}).subscribe(res => {

		});
	}

}
