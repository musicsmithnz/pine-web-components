import { Element as	PolymerElement } from "@polymer/polymer/polymer-element"
import * as template_string from "./mui-grid-fluid-1-1-1-1.html"

export class MuiGridFluid1111 extends PolymerElement {
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

customElements.define("mui-grid-fluid-1-1-1-1", MuiGridFluid1111)
