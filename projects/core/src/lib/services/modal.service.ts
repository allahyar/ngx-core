import {
	ComponentFactoryResolver,
	Inject,
	Injectable,
	Injector,
} from '@angular/core';
import {BsModalService} from 'ngx-bootstrap';
import {UiModuleConfig} from '../interfaces/config.model';
import {ModalTemplateComponent} from '../components/modal-template.component';

@Injectable({
	providedIn: 'root'
})
export class ModalService {

	constructor(private _modalService: BsModalService,
				private resolver: ComponentFactoryResolver,
				private injector: Injector,
				@Inject('uiConfig') private config: UiModuleConfig) {
	}


	open(componentType: any, config?: IModalConfig): ModalTemplateComponent {

		const ref = this._modalService.show(ModalTemplateComponent, {class: config.class});
		const content = (ref.content as ModalTemplateComponent);

		content.componentType = componentType;
		content.title = config.title || 'title';
		content.type = config.type || 'add';
		content.data = config.data || {};

		return content;
	}

}

export interface IModalConfig {
	title?: string;
	type?: 'edit' | 'add' | any;
	data?: any;
	class?: 'modal-lg' | 'modal-sm';
}
