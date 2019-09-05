import {Directive, ElementRef, HostListener, Input} from '@angular/core';
import {Subscription} from 'rxjs';

@Directive({
  selector: '[progress]'
})
export class ProgressButtonDirective {

	element: HTMLElement;
	promise: any;
	isPromiseDone = false;

	constructor(el: ElementRef) {
		this.element = el.nativeElement;
	}

	@Input()
	set progress(value: Subscription) {
		const isSubscription: boolean = value instanceof Subscription;
		if (isSubscription) {
			this.promise = new Promise((resolve) => {
				(value as Subscription).add(resolve);
			});
			this.initPromiseHandler();
		}
	}

	disabled() {
		this.element.setAttribute('disabled', 'disabled');
	}

	enabled() {
		this.element.removeAttribute('disabled');
	}

	initPromiseHandler() {
		if (this.element && this.promise) {
			this.disabled();
			const promise = this.promise;

			const resolveLoadingState = () => {
				this.isPromiseDone = true;
				if (this.isPromiseDone) {
					this.enabled();
				}
			};

			if (promise.finally) {
				promise.finally(resolveLoadingState);
			} else {
				promise
					.then(resolveLoadingState)
					.catch(resolveLoadingState);
			}
		}
	}


	@HostListener('click')
	handleButton() {
		// some code
	}

}
