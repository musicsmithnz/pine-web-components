import { PolymerElement } from "@polymer/polymer/polymer-element"
import * as template_string from "./component_assets/mdc-grid-list/mdc-grid-list.html"

export class MdcGridList extends PolymerElement {
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

customElements.define("mdc-grid-list", MdcGridList)
