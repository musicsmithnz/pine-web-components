import { Element as PolymerElement } from "/musicsmithnz/polymer_web_components/maste../../@polymer/polymer/polymer-element.js"

export class MuiButtonFabAccent extends PolymerElement {
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

customElements.define("mui-button-fab-accent", MuiButtonFabAccent)

