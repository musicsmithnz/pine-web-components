import { Element as	PolymerElement } from "../../@polymer/polymer/polymer-element.js"

export class MaterializeNavbarCenterLogo extends PolymerElement {
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

customElements.define("materialize-navbar-center-logo", MaterializeNavbarCenterLogo)
