import {
	ComponentFactory,
	ComponentFactoryResolver,
	ComponentRef,
	Inject,
	Injectable,
	Injector, ViewContainerRef
} from '@angular/core';
import {BsModalRef, BsModalService} from 'ngx-bootstrap';
import {UiModuleConfig} from '../interfaces/config.model';
import {ModalTemplateComponent} from '../components/modal-template.component';
import {BehaviorSubject, ReplaySubject, Subject} from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class ModalService {

	onClose: BehaviorSubject<any> = new BehaviorSubject(null);

	constructor(private _modalService: BsModalService,
				private resolver: ComponentFactoryResolver,
				public modalRef: BsModalRef,
				private injector: Injector,
				@Inject('uiConfig') private config: UiModuleConfig) {
	}


	open(componentType: any, config?: IModalConfig): any {

		this.modalRef = this._modalService.show(ModalTemplateComponent, {class: config.class});
		const content = this.modalRef.content;

		content.componentType = componentType;
		content.title = config.title || 'title';
		content.type = config.type || 'add';
		content.data = config.data || {};
		return content;
	}

	close() {
		this.modalRef.hide();
		this.onClose.next(false);
	}

}

export interface IModalConfig {
	title?: string;
	type?: 'edit' | 'add' | any;
	data?: any;
	class?: 'modal-lg' | 'modal-sm';
}
