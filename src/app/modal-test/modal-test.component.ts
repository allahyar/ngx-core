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

	constructor(private fb: FormBuilder) {

	}

	ngOnInit() {
		this.form = this.fb.group({
			test: [null, Validators.required]
		});
	}

}
