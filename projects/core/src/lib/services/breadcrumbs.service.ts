import {Inject, Injectable} from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';
import {distinctUntilChanged, filter, map} from 'rxjs/operators';
import {BehaviorSubject, Observable} from 'rxjs';
import {crumbCleaner, routePathExtract} from '../util/helper';
import {UiModuleConfig} from '../interfaces/config.model';

@Injectable({
	providedIn: 'root'
})
export class BreadcrumbsService {

	public breadcrumbs$: BehaviorSubject<IBreadcrumb[]> = new BehaviorSubject<IBreadcrumb[]>([]);

	constructor(private router: Router,
				private activatedRoute: ActivatedRoute,
				@Inject('uiConfig') private config: UiModuleConfig) {

		router.events.pipe(
			filter(event => event instanceof NavigationEnd),
			distinctUntilChanged()
		).subscribe(e => {

			const prefix = this.config.breadcrumb.prefix;
			const crumb = (prefix) ? [{label: prefix.toString(), url: '', key: null}] : [];

			this.breadcrumbs$.next(crumb);
			this._resolveCrumbs(activatedRoute.root);

			if (this.config.breadcrumb.useTitle) {
				console.log(activatedRoute.root.firstChild);
			}

		});

	}

	private _resolveCrumbs(route: ActivatedRoute, url: string = '') {


		const path = route.routeConfig ? route.routeConfig.path : '';
		const label = route.routeConfig && route.routeConfig.data ? route.routeConfig.data['title'] || '' : 'Home';
		let nextUrl: string;
		if (path.indexOf(':') !== -1) {
			const sucked = path.split('/');
			sucked.forEach(crumb => {
				if (crumb.indexOf(':', 0) === 0) {
					const key = crumbCleaner(crumb);
					const newLabel = route.snapshot.params[key];
					nextUrl = `${url}${newLabel}/`;
					this.push(newLabel, key, nextUrl);
				} else {
					nextUrl = `${url}${crumb}/`;
					this.push(label, null, nextUrl);
				}
			});

		} else {
			nextUrl = `${url}${path}/`;
			this.push(label, null, nextUrl);
		}


		if (route.firstChild) {
			return this._resolveCrumbs(route.firstChild, url);
		}
	}

	private get crumbsValue(): Array<IBreadcrumb> {
		return this.breadcrumbs$.value;
	}

	get crumbsAsObservable(): Observable<IBreadcrumb[]> {
		return this.breadcrumbs$.asObservable();
	}


	public store(key: string, label: string) {
		this.breadcrumbs$
			.pipe(map(users => users.find(user => user.key === key)))
			.subscribe(res => {
				const index = this.crumbsValue.indexOf(res);
				this.crumbsValue[index]['label'] = label;
			});
	}


	push(label: string, key: string, url: string) {
		const nextUrl = `${url}${label}/`;
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
