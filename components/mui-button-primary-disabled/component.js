import { Element as	PolymerElement } from "../../node_modules/@polymer/polymer/polymer-element.js"
import * as template_string from "./mui-button-primary-disabled.html"

export class MuiButtonPrimaryDisabled extends PolymerElement {
    static get observers(){}
	static get template(){
            return template_string
	}
	static get properties() {
    	return {
    	    name: String
	    }
	}
}

customElements.define("mui-button-primary-disabled", MuiButtonPrimaryDisabled)
