import { Element as PolymerElement } from "@polymer/polymer/polymer-element"
import * as template_string from "./mui-button-fab-accent.html"

export class MuiButtonFabAccent extends PolymerElement {
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

customElements.define("mui-button-fab-accent", MuiButtonFabAccent)

