import { Element as	PolymerElement } from "@polymer/polymer/polymer-element"
import * as template_string from "./materialize-card-image.html"

export class MaterializeCardImage extends PolymerElement {
	static get observers(){}
	static get template() {
            return template_string
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
