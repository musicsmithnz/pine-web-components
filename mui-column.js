import { PolymerElement } from "@polymer/polymer/polymer-element"
import * as template_string from "./component_assets/mui-column/mui-column.html"

export class MuiColumn extends PolymerElement {
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

customElements.define("mui-column", MuiColumn)
