import { PolymerElement } from "@polymer/polymer/polymer-element"
import * as template_string from "./component_assets/mui-grid-fluid-6x2/mui-grid-fluid-6x2.html"

export class MuiGridFluid6x2 extends PolymerElement {
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

customElements.define("mui-grid-fluid-6x2", MuiGridFluid6x2)
