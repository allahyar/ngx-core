import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
	templateUrl: './modal-test.component.html'
})
export class ModalTestComponent implements OnInit {

	form: FormGroup;
	@Input() content = '';
	type: any;
	data: any;

	constructor(fb: FormBuilder) {
		this.form = fb.group({
			test: [null, Validators.required]
		});
	}

	ngOnInit() {
	}

}
