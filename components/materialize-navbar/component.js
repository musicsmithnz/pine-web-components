import { Element as	PolymerElement } from "@polymer/polymer/polymer-element"
import * as template_string from "./materialize-navbar.html"

export class MaterializeNavbar extends PolymerElement {
	static get observers(){}
	static get template(){
            return template_string
	}
	static get properties() {
    	return {
	        name: String,
            left_tab_1: String,
            left_tab_2: String,
            left_tab_3: String,
            left_link_1: String,
            left_link_2: String,
            left_link_3: String,
            center_tab_1: String,
            center_tab_2: String,
            center_tab_3: String,
            center_link_1: String,
            center_link_2: String,
            center_link_3: String,
            right_tab_1: String,
            right_tab_2: String,
            right_tab_3: String,
            right_link_1: String,
            right_link_2: String,
            right_link_3: String
        }
	}
}

customElements.define("materialize-navbar", MaterializeNavbar)
