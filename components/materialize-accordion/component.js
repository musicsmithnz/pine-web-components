import { Element as	PolymerElement } from "../../node_modules/@polymer/polymer/polymer-element.js"
import * as template_string from "./materialize-accordion.html"

export class MaterializeAccordion extends PolymerElement {
    static get observers(){
    }
    constructor(){
        super()
        this.name="MaterializeAccordion"
    }
	static get template() {
            return template_string
	}
	static get properties() {
    	return {
    	    name: String
	    }
	}
}

customElements.define("materialize-accordion", MaterializeAccordion)
