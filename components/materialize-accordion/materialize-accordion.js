import { Element as	PolymerElement } from "../../@polymer/polymer/polymer-element.js"

export class MaterializeAccordion extends PolymerElement {
    static get observers(){
    }
    constructor(){
        super()
        this.name="MaterializeAccordion"
    }
	static get template() {
            return
	}
	static get properties() {
    	return {
    	    name: String
	    }
	}
}

customElements.define("materialize-accordion", MaterializeAccordion)
