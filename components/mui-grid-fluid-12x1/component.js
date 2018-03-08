import { Element as	PolymerElement } from "@polymer/polymer/polymer-element"
import * as template_string from "./mui-grid-fluid-12x1.html"

export class MuiGridFluid12x1 extends PolymerElement {
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

customElements.define("mui-grid-fluid-12x1", MuiGridFluid12x1)
