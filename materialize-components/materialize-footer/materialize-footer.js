import { Element as PolymerElement } from "@polymer/polymer/polymer-element"
import * as template_string from "./component_assets/materialize-footer/materialize-footer.html"

export class MaterializeFooter extends PolymerElement {
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

customElements.define("materialize-footer", MaterializeFooter)
