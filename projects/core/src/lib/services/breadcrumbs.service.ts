import {Injectable} from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';
import {distinctUntilChanged, filter, map} from 'rxjs/operators';
import {BehaviorSubject, Observable} from 'rxjs';
import {IRoutePath, routePathExtract} from '../util/helper';

@Injectable({
	providedIn: 'root'
})
export class BreadcrumbsService {

	public breadcrumbs$ = new BehaviorSubject<IBreadcrumb[]>([]);

	constructor(private router: Router,
				private activatedRoute: ActivatedRoute) {

		router.events.pipe(
			filter(event => event instanceof NavigationEnd),
			distinctUntilChanged(),
			map(event => {
				console.log('start');
				this.breadcrumbs$.next([]);
				this._resolveCrumbs(activatedRoute.root);
			})
		).subscribe(res => {

		});

	}

	private _resolveCrumbs(route: ActivatedRoute, url: string = '') {

		console.log('_resolveCrumbs');
		const label = route.routeConfig ? route.routeConfig.data['title'] : 'Home';
		const path = route.routeConfig ? route.routeConfig.path : '';
		const pathExtract = routePathExtract(path, route);

		const nextUrl = `${url}${path}/`;
		const breadcrumb = {
			key: pathExtract.key,
			label: pathExtract.label,
			url: nextUrl
		};
		const newBreadcrumbs = [...this.crumbsValue, breadcrumb];
		this.breadcrumbs$.next(newBreadcrumbs);
		console.log(newBreadcrumbs);

		if (route.firstChild) {
			return this._resolveCrumbs(route.firstChild, nextUrl);
		}
	}

	private get crumbsValue(): Array<IBreadcrumb> {
		return this.breadcrumbs$.value;
	}

	get crumbsAsObservable(): Observable<IBreadcrumb[]> {
		return this.breadcrumbs$.asObservable();
	}

	public store(key: string, label: string) {
		console.log(this.crumbsValue.filter(x => x.key === key));
		const found = this.crumbsValue.filter(x => x.key === key)[0];
		if (found) {
			const index = this.crumbsValue.indexOf(found);
			this.crumbsValue[index]['label'] = label;
		}
	}

}


export interface IBreadcrumb {
	label: string;
	url: string;
	key: string;
}
