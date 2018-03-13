import { PolymerElement } from "@polymer/polymer/polymer-element"
import * as template_string from "./component_assets/mui-dropdown-left/mui-dropdown-left.html"

export class MuiDropdownLeft extends PolymerElement {
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

customElements.define("mui-dropdown-left", MuiDropdownLeft)
