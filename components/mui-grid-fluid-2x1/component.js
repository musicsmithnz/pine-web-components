import { Element as	PolymerElement } from "@polymer/polymer/polymer-element"
import * as template_string from "./mui-grid-fluid-2x1.html"

export class MuiGridFluid2x1 extends PolymerElement {
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

customElements.define("mui-grid-fluid-2x1", MuiGridFluid2x1)
