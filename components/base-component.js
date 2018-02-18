import { Element as	PolymerElement } from "/node_modules/@polymer/polymer/polymer-element.js"

export class ELEMENT_CLASS extends PolymerElement {
    static get observers(){}
	static get template() {
    return `
        <!--STYLES-->
        <!--END-STYLES-->

        <!--TEMPLATE-->
        <!--END-TEMPLATE-->

        <!--SCRIPTS-->
        <!--END-SCRIPTS-->
    `
	}
	static get properties() {
    	return {
    	    name: String
	    }
	}
}

customElements.define("ELEMENT_TAG", ELEMENT_CLASS)
