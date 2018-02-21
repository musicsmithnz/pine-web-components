import { Element as	PolymerElement } from "/node_modules/@polymer/polymer/polymer-element.js"

export class MdcToolbar extends PolymerElement {
    static get observers(){}
	static get template(){
    return `
        <!--STYLES-->
            <link rel="stylesheet" href="https://ipfs.io/ipfs/QmQGgLSemG8rLUZYxiMViB7b7E1qFiyV3MKcHFCtm66qiW/material-components-web.min.css"></link>
            <style>
            </style>
        <!--END-STYLES-->

        <!--TEMPLATE-->
            <header class="mdc-toolbar--fixed">
                <div class="mdc-toolbar__row">
                    <section class="mdc-toolbar__section mdc-toolbar__section--align-start">
                        <slot name="start"></slot>
                    </section>
                    <section class="mdc-toolbar__section">
                        <slot></slot>
                    </section>
                    <section class="mdc-toolbar__section mdc-toolbar__section--align-end">
                        <slot name="end"></slot>
                    </section>
                </div>
            </header>
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

customElements.define("mdc-toolbar", MdcToolbar)
