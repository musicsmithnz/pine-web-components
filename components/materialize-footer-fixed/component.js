import { Element as	PolymerElement } from "../../node_modules/@polymer/polymer/polymer-element.js"
import * as template_string from "./materialize-footer-fixed.html"

export class MaterializeFooterFixed extends PolymerElement {
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

customElements.define("materialize-footer-fixed", MaterializeFooterFixed)
