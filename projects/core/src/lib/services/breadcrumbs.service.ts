import {Inject, Injectable} from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';
import {distinctUntilChanged, filter, map} from 'rxjs/operators';
import {BehaviorSubject, Observable} from 'rxjs';
import {UiModuleConfig} from '../interfaces/config.model';

@Injectable({
	providedIn: 'root'
})
export class BreadcrumbsService {

	public breadcrumbs$: BehaviorSubject<IBreadcrumb[]> = new BehaviorSubject<IBreadcrumb[]>([]);
	private url: string;

	constructor(private router: Router,
				private activatedRoute: ActivatedRoute,
				@Inject('uiConfig') private config: UiModuleConfig) {

		router.events.pipe(
			filter(event => event instanceof NavigationEnd),
			distinctUntilChanged()
		).subscribe(e => {

			const prefix = (config.breadcrumb.prefix);
			this.url = (prefix) ? '/' : '';
			const crumb = (prefix) ? [{label: prefix.toString(), url: this.url, key: null}] : [];

			this.breadcrumbs$.next(crumb);
			this._resolveCrumbs(activatedRoute.root);

		});

	}

	private _resolveCrumbs(route: ActivatedRoute) {

		const path = route.routeConfig ? route.routeConfig.path : '';
		const label = route.routeConfig && route.routeConfig.data ? route.routeConfig.data['breadcrumb'] || '' : '';

		if (path.indexOf(':') !== -1) {
			const sucked = path.split('/');
			sucked.forEach(crumb => {
				if (crumb.indexOf(':', 0) === 0) {
					const key = crumb.substr(1);
					const newLabel = route.snapshot.params[key];
					this.url += `${newLabel}/`;
					this.push(newLabel, key, this.url);
				} else {
					this.url += `${crumb}/`;
					this.push(label, null, this.url);
				}
			});

		} else {
			this.url += `${path}/`;
			this.push(label, null, this.url);
		}


		if (route.firstChild) {
			return this._resolveCrumbs(route.firstChild);
		}
	}

	private get crumbsValue(): Array<IBreadcrumb> {
		return this.breadcrumbs$.value;
	}

	private get crumbsAsObservable(): Observable<IBreadcrumb[]> {
		return this.breadcrumbs$.asObservable();
	}


	public store(key: string, label: string) {
		this.breadcrumbs$
			.pipe(map(users => users.find(user => user.key === key)))
			.subscribe(res => {
				const index = this.crumbsValue.indexOf(res);
				if (this.crumbsValue[index]) {
					this.crumbsValue[index]['label'] = label;
				}
			});
	}


	private push(label: string, key: string, url: string) {
		const breadcrumb = {key, label, url};
		const newBreadcrumbs = [...this.crumbsValue, breadcrumb];
		this.breadcrumbs$.next(newBreadcrumbs);
	}
}


export interface IBreadcrumb {
	label: string;
	url: string;
	key: string;
}
