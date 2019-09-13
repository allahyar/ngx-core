import {Subscription} from 'rxjs';

export interface IBaseModal {

	type: string;
	data: any;
	reqObservable: Subscription;

	onSave?(data?: any): void;
}
