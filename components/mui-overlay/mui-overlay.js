import { Element as	PolymerElement } from "../../@polymer/polymer/polymer-element.js"

export class MuiOverlay extends PolymerElement {
    static get observers(){}
	static get template() {
            return
	}
	static get properties() {
    	return {
    	    name: String
	    }
	}
}

customElements.define("mui-overlay", MuiOverlay)
