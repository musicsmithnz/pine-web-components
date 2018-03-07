import { Element as	PolymerElement } from "../../node_modules/@polymer/polymer/polymer-element.js"
import * as template_string from "./mui-appbar.html"

export class MuiAppbar extends PolymerElement {
	static get observers(){}
	static get template() {
            return template_string
	}
	static get properties() {
	    return {
	        name: String
	    }
	}
}

customElements.define("mui-appbar", MuiAppbar)
