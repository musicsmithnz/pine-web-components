import { Element as	PolymerElement } from "@polymer/polymer/polymer-element"
import * as template_string from "./materialize-navbar-center-logo.html"

export class MaterializeNavbarCenterLogo extends PolymerElement {
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

customElements.define("materialize-navbar-center-logo", MaterializeNavbarCenterLogo)
