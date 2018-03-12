import { Element as	PolymerElement } from "@polymer/polymer/polymer-element"
import * as template_string from "./mui-overlay-modal.html"

export class MuiOverlayModal extends PolymerElement {
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

customElements.define("mui-overlay-modal", MuiOverlayModal)
