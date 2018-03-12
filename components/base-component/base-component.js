import { Element as	PolymerElement } from "@polymer/polymer/polymer-element"
import * as template_string from "./base-component.html"

export class ELEMENT_CLASS extends PolymerElement {
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

customElements.define("ELEMENT_TAG", ELEMENT_CLASS)
