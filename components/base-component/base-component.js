import { Element as	PolymerElement } from "../../@polymer/polymer/polymer-element.js"

export class ELEMENT_CLASS extends PolymerElement {
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

customElements.define("ELEMENT_TAG", ELEMENT_CLASS)
