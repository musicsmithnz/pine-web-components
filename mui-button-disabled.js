import { PolymerElement } from "@polymer/polymer/polymer-element"
import * as template_string from "./component_assets/mui-button-disabled/mui-button-disabled.html"

export class MuiButtonDisabled extends PolymerElement {
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

customElements.define("mui-button-disabled", MuiButtonDisabled)
