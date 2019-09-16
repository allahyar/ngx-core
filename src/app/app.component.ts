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
import {
	ActivatedRoute,
	ActivatedRouteSnapshot,
	ActivationStart,
	ChildActivationEnd,
	NavigationEnd,
	Router,
	RoutesRecognized
} from '@angular/router';
import {distinctUntilChanged, filter, map, take} from 'rxjs/operators';
import {isEmpty} from '../../projects/core/src/lib/util/helper';


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

	// breadcrumbs$ = this.router.events.pipe(
	// 	filter(event => event instanceof NavigationEnd),
	// 	distinctUntilChanged(),
	// 	map(event => this.buildBreadCrumb(this.activatedRoute.root))
	// );

	constructor(private storage: LocalStorage,
				private uiService: UiService,
				private translate: CoreTranslateService,
				private dialog: DialogService,
				private toast: ToastService,
				private auth: AuthenticationService) {

		// this.router.events.pipe(
		// 	filter(e => e instanceof NavigationEnd),
		// 	map(() => this.activatedRoute),
		// 	map(route => route.data),
		// 	map(data => data)
		// ).subscribe(res => {
		// 	res.subscribe(x => console.log(x));
		// });

		// this.router.events.subscribe((data) => {
		// 	if (data instanceof RoutesRecognized) {
		// 		console.log(data.state.root.firstChild.data);
		// 	}
		// });

		// this.storage.set('allahyar', 'adadad', Date.now());
		// if (this.storage.has('allahyar')) {
		// 	console.log('allahyar is ok');
		// }
		// this.auth.verifyToken().then(res => {
		// 	console.log(this.auth.currentUserValue);
		// });


		// console.log('user info ', this.auth.currentUserValue);


	}


	ngOnInit(): void {

		// this.queryService.delete({url: ''}).subscribe(res => {
		// 	console.log(res);
		// });
		// this.dialog.prompt('HELLO');
		// const modal = this.modal.open(ModalTestComponent, {title: 'New User', data: {success: true}});
		// modal.onSubmit.subscribe(res => {
		// 	console.log(modal.form.value);
		// });
		// setTimeout(() => {
		// 	// this.dialog.prompt('HELLO');
		// 	// this.uiService.setDirection('ltr');
		// 	this.toast.success('HELLO', {name: 'ahmad'});
		//
		// }, 2000);
		//
		// setTimeout(() => {
		// 	this.uiService.setDirection('rtl');
		// }, 4000);
		//
		//
		// console.log(this.uiService.direction);

		// }


// 	buildBreadCrumb(route: ActivatedRoute, url: string = '',
// 					breadcrumbs: Array<BreadCrumb> = []): Array<BreadCrumb> {
// 		// If no routeConfig is available we are on the root path
// 		const label = route.routeConfig ? route.routeConfig.data['title'] : 'Home';
// 		const path = route.routeConfig ? route.routeConfig.path : '';
// 		// In the routeConfig the complete path is not available,
// 		// so we rebuild it each time
// 		const nextUrl = `${url}${path}/`;
// 		const breadcrumb = {
// 			label,
// 			url: nextUrl,
// 		};
// 		const newBreadcrumbs = [...breadcrumbs, breadcrumb];
// 		if (route.firstChild) {
// 			// If we are not on our current path yet,
// 			// there will be more children to look after, to build our breadcumb
// 			return this.buildBreadCrumb(route.firstChild, nextUrl, newBreadcrumbs);
// 		}
// 		return newBreadcrumbs;
// 	}
// }
//
// interface BreadCrumb {
// 	label: string;
// 	url: string;
// }

	}
}
