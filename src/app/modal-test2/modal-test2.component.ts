import { Component, OnInit } from '@angular/core';
import {Modal} from 'core';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-modal-test2',
  templateUrl: './modal-test2.component.html'
})
export class ModalTest2Component extends Modal {

  constructor() {
  	super();
  }

	onSave(data: any): any {
		console.log(data);
		this.reqObservable = new Observable(observer => {
			setTimeout(() => {
				observer.complete();
				this.modalRef.close();
			}, 4000);
		}).subscribe(res => {

		});
	}

}
