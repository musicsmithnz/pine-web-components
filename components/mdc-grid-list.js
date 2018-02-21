import { Element as	PolymerElement } from "/node_modules/@polymer/polymer/polymer-element.js"

export class MdcGridList extends PolymerElement {
    static get observers(){}
	static get template(){
    return `
        <!--STYLES-->
            <link rel="stylesheet" href="https://ipfs.io/ipfs/QmQGgLSemG8rLUZYxiMViB7b7E1qFiyV3MKcHFCtm66qiW/material-components-web.min.css"></link>
            <style>
            * {
                width: 100%;
            }
            </style>
        <!--END-STYLES-->

        <!--TEMPLATE-->
			<div class="mdc-grid-list">
				<ul class="mdc-grid-list__tiles">
                    <slot></slot>
            	</ul>
            </div>
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

customElements.define("mdc-grid-list", MdcGridList)
