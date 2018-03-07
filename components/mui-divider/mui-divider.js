import { Element as	PolymerElement } from "../../@polymer/polymer/polymer-element.js"

export class MuiDivider extends PolymerElement {
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

customElements.define("mui-divider", MuiDivider)
