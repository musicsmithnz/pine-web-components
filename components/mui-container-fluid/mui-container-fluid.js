import { Element as	PolymerElement } from "../../@polymer/polymer/polymer-element.js"

export class MuiContainerFluid extends PolymerElement {
    static get observers(){}
	static get template(){
            return
	}
	static get properties() {
    	return {
    	    name: String
	    }
	}
}

customElements.define("mui-container-fluid", MuiContainerFluid)
