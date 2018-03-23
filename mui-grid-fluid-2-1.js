import { Element as PolymerElement } from "@polymer/polymer/polymer-element"
import * as template_string from "./component_assets/mui-grid-fluid-2-1/mui-grid-fluid-2-1.html"

export class MuiGridFluid21 extends PolymerElement {
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

customElements.define("mui-grid-fluid-2-1", MuiGridFluid21)
