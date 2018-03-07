import { Element as	PolymerElement } from "../../@polymer/polymer/polymer-element.js"

export class MaterializeCardImage extends PolymerElement {
	static get observers(){}
	static get template() {
            return
	}
	static get properties() {
	    return {
            name: String,
            img: String,
            title: String,
            content: String,
            action: String,
            actionlink: String
	    }
	}
}

customElements.define("materialize-card-image", MaterializeCardImage)
