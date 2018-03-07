import { Element as	PolymerElement } from "../../@polymer/polymer/polymer-element.js"

export class MuiTableBordered extends PolymerElement {
	static get observers(){}
	static get template(){
            return
	}
	static get properties() {
	return {
	name: String
	}
	}
}

customElements.define("mui-table-bordered", MuiTableBordered)
