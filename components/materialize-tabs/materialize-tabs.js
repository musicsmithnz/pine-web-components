import { Element as	PolymerElement } from "../../@polymer/polymer/polymer-element.js"

export class MaterializeTabs extends PolymerElement {
	static get observers(){}
	static get template(){
            return
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
