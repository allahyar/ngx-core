import {Base} from './base.class';
import {Subscription} from 'rxjs';
import {IBaseModal} from '../interfaces/modal.interface';
import {ModalService} from '../services/modal.service';
import {InjectToken} from '../decorators/inject.decorator';

export class Modal extends Base implements IBaseModal {

	type: any;
	data: any;

	reqObservable: Subscription;

	@InjectToken(ModalService)
	modalRef: ModalService;


}


