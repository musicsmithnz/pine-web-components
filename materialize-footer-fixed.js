import { PolymerElement } from "@polymer/polymer/polymer-element"
import * as template_string from "./component_assets/materialize-footer-fixed/materialize-footer-fixed.html"

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
