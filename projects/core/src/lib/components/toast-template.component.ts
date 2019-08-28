import {Component, Input, OnInit} from '@angular/core';
import {Toast} from 'ngx-toast-notifications';

@Component({
	selector: 'lib-toast-template',
	template: `
		<div class="toast-container">
			<div class="toast-icon">
				
			</div>
			<div class="toast-message">
				<span class="msg-caption">
					{{toast.caption}}
				</span>
				<span class="msg-text">
					{{toast.text}}
				</span>
			</div>
		</div>
	`,
	styleUrls: ['./toast-template.component.scss']
})
export class ToastTemplateComponent {

	@Input() toast: Toast;

}
