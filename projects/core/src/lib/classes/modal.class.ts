import {Base} from './base.class';
import {IBaseModal} from '../interfaces/modal.interface';
import {ModalService} from '../services/modal.service';
import {InjectToken} from '../decorators/inject.decorator';

export class Modal extends Base implements IBaseModal {

	type: any;
	data: any;

	@InjectToken(ModalService)
	modalService: ModalService;


}


