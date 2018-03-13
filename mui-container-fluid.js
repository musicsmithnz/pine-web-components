import { PolymerElement } from "@polymer/polymer/polymer-element"
import * as template_string from "./component_assets/mui-container-fluid/mui-container-fluid.html"

export class MuiContainerFluid extends PolymerElement {
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

customElements.define("mui-container-fluid", MuiContainerFluid)
