import { Element as	PolymerElement } from "@polymer/polymer/polymer-element"
import * as template_string from "./component_assets/mui-form-select/mui-form-select.html"

export class MuiFormSelect extends PolymerElement {
	static get observers(){
	
	
	}
	static get template() {
            return template_string
	}
	static get properties() {
	return {
	name: String
	}
	}
}

customElements.define("mui-form-select", MuiFormSelect)
