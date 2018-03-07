import { Element as	PolymerElement } from "../../@polymer/polymer/polymer-element.js"

export class MaterializeNavbar extends PolymerElement {
	static get observers(){}
	static get template(){
            return
	}
	static get properties() {
    	return {
	        name: String,
            tab1l: String,
            tab2l: String,
            tab3l: String,
            link1l: String,
            link2l: String,
            link3l: String,
            tab1c: String,
            tab2c: String,
            tab3c: String,
            link1c: String,
            link2c: String,
            link3c: String,
            tab1r: String,
            tab2r: String,
            tab3r: String,
            link1r: String,
            link2r: String,
            link3r: String
        }
	}
}

customElements.define("materialize-navbar", MaterializeNavbar)
