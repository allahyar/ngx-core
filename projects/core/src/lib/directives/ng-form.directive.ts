import {Directive, forwardRef} from '@angular/core';
import {ControlContainer, NgForm} from '@angular/forms';

export const formDirectiveProvider: any = {
	provide: ControlContainer,
	useExisting: forwardRef(() => NgForm)
};

@Directive({
	selector: '[libNgForm]',
	providers: [formDirectiveProvider],
	exportAs: 'ngForm'
})
export class NgFormDirective {

	constructor() {
	}

}
