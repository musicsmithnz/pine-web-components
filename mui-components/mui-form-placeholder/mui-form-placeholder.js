import { Element as PolymerElement } from "@polymer/polymer/polymer-element"
import * as template_string from "./component_assets/mui-form-placeholder/mui-form-placeholder.html"

export class MuiFormPlaceholder extends PolymerElement {
    static get observers(){
    
    
    }
	static get template() {
            return template_string
	}
	static get properties() {
    	return {
    	    name: String
	    }
	}
}

customElements.define("mui-form-placeholder", MuiFormPlaceholder)
