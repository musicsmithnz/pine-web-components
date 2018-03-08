import { Element as	PolymerElement } from "@polymer/polymer/polymer-element"
import * as template_string from "./mui-button-danger-disabled.html"

export class MuiButtonDangerDisabled extends PolymerElement {
    static get observers(){}
	static get template() {
            return template_string
	}
	static get properties() {
    	return {
    	    name: String
	    }
	}
}

customElements.define("mui-button-danger-disabled", MuiButtonDangerDisabled)
