import { Element as	PolymerElement } from "@polymer/polymer/polymer-element"
import * as template_string from "./mui-divider-left.html"

export class MuiDividerLeft extends PolymerElement {
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

customElements.define("mui-divider-left", MuiDividerLeft)
