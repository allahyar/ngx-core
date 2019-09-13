export interface IBaseModal {

	type: string;
	data: any;

	onSave?(data?: any): void;
}
