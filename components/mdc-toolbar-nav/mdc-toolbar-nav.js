import { Element as	PolymerElement } from "@polymer/polymer/polymer-element"
import * as template_string from "./mdc-toolbar-nav.html"

export class MdcToolbarNav extends PolymerElement {
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

customElements.define("mdc-toolbar-nav", MdcToolbarNav)
