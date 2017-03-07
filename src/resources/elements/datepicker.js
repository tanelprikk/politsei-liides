import {bindable, bindingMode, inject} from 'aurelia-framework';

import 'jquery';
import 'bootstrap';
import 'bootstrap-datepicker';
import 'bootstrap-datepicker-i18n-et';

@inject(Element)
export class Datepicker {
	@bindable guid = '';
	@bindable({ defaultBindingMode: bindingMode.twoWay }) value;
	@bindable title = '';

	constructor(element) {
		this.element = element;
	}

	attached() {
		let defaults = {
				format: "dd/mm/yyyy",
				language: "et",
				clearBtn: true,
				title: this.title,
				endDate: new Date(),
				autoclose: true,
				forceParse: false,
				showOnFocus: false, //?
				keyboardNavigation: false
			};
		
		let _this = this;
		this.input = this.element.querySelector('input');
		this.datepicker = $(this.input)
			.datepicker(defaults)
			.on('change', e => {
				_this.value = e.target.value;
			})
			.on('changeDate', e => {
				// _this.datepicker.hide();
			})
			.data('datepicker');
	}

	show() {
		this.datepicker.show();
	}

	detached() {
		$(this.input).datepicker('destroy').off();
	}
}