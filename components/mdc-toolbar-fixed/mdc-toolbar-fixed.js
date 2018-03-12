import { Element as	PolymerElement } from "@polymer/polymer/polymer-element"
import * as template_string from "./mdc-toolbar-fixed.html"

export class MdcToolbarFixed extends PolymerElement {
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

customElements.define("mdc-toolbar-fixed", MdcToolbarFixed)
