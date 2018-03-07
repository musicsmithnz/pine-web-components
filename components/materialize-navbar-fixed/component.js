import { Element as	PolymerElement } from "../../node_modules/@polymer/polymer/polymer-element.js"
import * as template_string from "./materialize-navbar-fixed.html"

export class MaterializeNavbarFixed extends PolymerElement {
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

customElements.define("materialize-navbar-fixed", MaterializeNavbarFixed)
