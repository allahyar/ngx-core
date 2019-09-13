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
import {FormBuilder, FormGroup} from '@angular/forms';
import {Subject} from 'rxjs';

@Component({
	template: `
		<div class="modal-header">
			<h5 class="modal-title">{{title}}</h5>
			<button type="button" class="close" data-dismiss="modal" aria-label="Close" (click)="onHide()">
				<span aria-hidden="true">&times;</span>
			</button>
		</div>
		<div class="modal-body">
			<form [formGroup]="form">
				<ng-container #container></ng-container>
				<button type="submit" class="btn btn-success" [disabled]="form.invalid" (click)="onSave()">
					Save
				</button>
				<button type="button" class="btn btn-light" (click)="onClose()"></button>
			</form>
		</div>
		{{form.value|json}}

	`,
	styleUrls: ['./modal-template.component.css']
})
export class ModalTemplateComponent implements OnInit, OnDestroy {

	public form: FormGroup;
	public onSubmit: Subject<boolean>;

	public title: string;
	public type: any;
	public data: any;


	public component: any;
	public componentRef: ComponentRef<any>;

	@Input() set componentType(c: any) {
		this.component = c;
		this.renderContent();
	}

	@ViewChild('container', {
		read: ViewContainerRef,
		static: true
	}) container: ViewContainerRef;

	constructor(public modalRef: BsModalRef,
				private fb: FormBuilder) {
		this.form = fb.group({});
		this.onSubmit = new Subject();
	}


	renderContent() {
		this.container.clear();
		const injector = this.container.injector;
		const cfr = injector.get(ComponentFactoryResolver);
		const componentFactory = cfr.resolveComponentFactory(this.component);
		const componentRef = this.container.createComponent<any>(componentFactory);
		componentRef.instance.form = this.form;
		this.componentRef = componentRef;
	}

	ngOnInit() {
	}

	public onSave(): void {
		this.onSubmit.next(true);
		this.modalRef.hide();
	}

	public onClose(): void {
		this.onSubmit.next(false);
		this.modalRef.hide();
	}

	public onHide() {
		this.modalRef.hide();
	}

	ngOnDestroy() {
		if (this.componentRef) {
			this.componentRef.destroy();
		}
	}

}
