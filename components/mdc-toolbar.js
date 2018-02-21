
import { Element as	PolymerElement } from "/node_modules/@polymer/polymer/polymer-element.js"

export class MdcToolbar extends PolymerElement {
    static get observers(){}
	static get template(){
    return `
        <!--STYLES-->
            <link rel="stylesheet" href="https://ipfs.io/ipfs/QmQGgLSemG8rLUZYxiMViB7b7E1qFiyV3MKcHFCtm66qiW/material-components-web.min.css">
        <!--END-STYLES-->

        <!--TEMPLATE-->
            <header class="mdc-toolbar">
                <div class="mdc-toolbar__row">
                <section class="mdc-toolbar__section mdc-toolbar__section--align-start">
                    <slot name="start">
                        <a href="#" class="material-icons mdc-toolbar__menu-icon">menu</a>
                        <span class="mdc-toolbar__title">Title</span>            
                    </slot>
                </section>
                <section class="mdc-toolbar__section">
                    <slot name="center">
                        <a href="#" class="material-icons mdc-toolbar__menu-icon">menu</a>
                        <span class="mdc-toolbar__title">Title</span>            
                    </slot>
                </section>
                <section class="mdc-toolbar__section mdc-toolbar__section--align-end">
                    <slot name="end">
                        <a href="#" class="material-icons mdc-toolbar__menu-icon">menu</a>
                        <span class="mdc-toolbar__title">Title</span>            
                    </slot>
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
