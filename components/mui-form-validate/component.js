import { Element as	PolymerElement } from "../../node_modules/@polymer/polymer/polymer-element.js"
import * as template_string from "./mui-form-validate.html"

export class MuiFormValidate extends PolymerElement {
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

customElements.define("mui-form-validate", MuiFormValidate)
