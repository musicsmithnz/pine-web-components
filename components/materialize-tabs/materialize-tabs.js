import { Element as	PolymerElement } from "@polymer/polymer/polymer-element"
import * as template_string from "./materialize-tabs.html"

export class MaterializeTabs extends PolymerElement {
	static get observers(){}
	static get template(){
            return template_string
	}
	static get properties() {
    	return {
	        name: String,
            tab1: String,
            tab2: String,
            tab3: String,
            link1: String,
            link2: String,
            link3: String
	    }
	}
}

customElements.define("materialize-tabs", MaterializeTabs)
