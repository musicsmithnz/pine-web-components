import { Element as	PolymerElement } from "../../@polymer/polymer/polymer-element.js"

export class MaterializeParallax extends PolymerElement {
    static get observers(){
    }
    constructor(){
        super()
        this.name="MaterializeParallax"
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

customElements.define("materialize-parallax", MaterializeParallax)
