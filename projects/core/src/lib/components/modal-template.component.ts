import {
	Component,
	ComponentFactoryResolver,
	ComponentRef,
	Input,
	OnDestroy,
	OnInit,
	ViewChild,
	ViewContainerRef
} from '@angular/core';
import {BsModalRef} from 'ngx-bootstrap';
import {NgForm} from '@angular/forms';
import {Subject, Subscription} from 'rxjs';

@Component({
	template: `
		<div class="modal-header">
			<h5 class="modal-title">{{title}}</h5>
			<button type="button" class="close" (click)="onHide()">
				<span aria-hidden="true">&times;</span>
			</button>
		</div>
		<div class="modal-body">
			<form #f="ngForm">
				<ng-container #container libNgForm></ng-container>
				<button type="submit" class="btn btn-success mr-2" *ngIf="loading"
						[progress]="promise"
						[disabled]="f.invalid"
						(click)="onSave()">
					Save
				</button>
				<button type="submit" class="btn btn-success" (click)="onClose()">
					Close
				</button>
			</form>

		</div>
	`,
	styleUrls: ['./modal-template.component.css']
})
export class ModalTemplateComponent implements OnInit, OnDestroy {

	@ViewChild('f', {static: true}) form: NgForm;
	public onSubmit: Subject<boolean>;
	title: string;
	type: any;
	data: any;

	component: any;
	componentRef: ComponentRef<any>;

	loading = false;
	promise: Subscription;

	@Input() set componentType(c: any) {
		this.component = c;
		this.onSubmit = new Subject();
		this.renderContent();
	}

	@ViewChild('container', {
		read: ViewContainerRef,
		static: true
	}) container: ViewContainerRef;

	constructor(private modalRef: BsModalRef) {
	}


	renderContent() {
		this.container.clear();
		const injector = this.container.injector;
		const cfr = injector.get(ComponentFactoryResolver);
		const componentFactory = cfr.resolveComponentFactory(this.component);
		const componentRef = this.container.createComponent<any>(componentFactory);
		componentRef.instance.form = this.form;
		this.componentRef = componentRef;
		this.loading = true;
	}

	ngOnInit() {
	}

	ngOnDestroy() {
		if (this.componentRef) {
			this.componentRef.destroy();
		}
	}


	onSave() {

		const resolveModalState = () => {
			this.onSubmit.next(true);
			this.modalRef.hide();
		};

		this.promise = this.cri.onSave(this.form.value);
		const isSubscription: boolean = this.promise instanceof Subscription;
		if (isSubscription) {
			const promise = new Promise((resolve) => {
				(this.promise as Subscription).add(resolve);
			});
			if (promise.finally) {
				promise.finally(resolveModalState);
			}
		}
	}

	onClose() {
		this.onSubmit.next(false);
		this.modalRef.hide();
	}

	onHide() {
		this.modalRef.hide();
	}

	get cri(): any {
		return this.componentRef.instance;
	}
}
