import { Element as	PolymerElement } from "../../node_modules/@polymer/polymer/polymer-element.js"
import * as template_string from "./mui-grid-fluid-3x1.html"

export class MuiGridFluid3x1 extends PolymerElement {
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

customElements.define("mui-grid-fluid-3x1", MuiGridFluid3x1)
