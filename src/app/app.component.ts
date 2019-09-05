import {Component, OnInit} from '@angular/core';
import {
	AuthenticationService,
	CoreTranslateService,
	DialogService,
	InjectToken,
	LocalStorage,
	ModalService,
	QueryService,
	ToastService,
	UiService
} from 'core';
import {ModalTestComponent} from './modal-test/modal-test.component';
import {BsModalRef} from 'ngx-bootstrap';


@Component({
	selector: 'app-root',
	templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {

	title = 'ngx-core';

	@InjectToken(QueryService)
	queryService: QueryService<any>;

	@InjectToken(ModalService)
	modal: ModalService;

	constructor(private storage: LocalStorage,
				private uiService: UiService,
				private translate: CoreTranslateService,
				private dialog: DialogService,
				private toast: ToastService,
				private auth: AuthenticationService) {


		console.log(Math.floor(Date.now() / 1000));

		this.storage.set('allahyar', 'adadad', Date.now());
		if (this.storage.has('allahyar')) {
			console.log('asas');
		}
		// this.auth.verifyToken().then(res => {
		// 	console.log(this.auth.currentUserValue);
		// });


		console.log(this.auth.currentUserValue);


	}


	ngOnInit(): void {
		// this.queryService.delete({url: ''}).subscribe(res => {
		// 	console.log(res);
		// });
		// this.dialog.prompt('HELLO');
		const ref = this.modal.open(ModalTestComponent, {title: 'New User', data: {success: true}});
		ref.onHide.subscribe(res => {

		});
		setTimeout(() => {
			// this.dialog.prompt('HELLO');
			// this.uiService.setDirection('ltr');
			this.toast.success('HELLO', {name: 'ahmad'});

		}, 2000);
		//
		// setTimeout(() => {
		// 	this.uiService.setDirection('rtl');
		// }, 4000);
		//
		//
		// console.log(this.uiService.direction);

	}


}
