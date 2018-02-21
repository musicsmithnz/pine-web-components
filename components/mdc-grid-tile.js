import { Element as	PolymerElement } from "/node_modules/@polymer/polymer/polymer-element.js"

export class MdcGridTile extends PolymerElement {
    static get observers(){}
	static get template(){
    return `
        <!--STYLES-->
                    <link rel="stylesheet" href="https://ipfs.io/ipfs/QmQGgLSemG8rLUZYxiMViB7b7E1qFiyV3MKcHFCtm66qiW/material-components-web.min.css"></link>
        <style>
            .mdc-grid-tile {
                width: 100%;
            }
        </style>

        <!--END-STYLES-->

        <!--TEMPLATE-->
			<li class="mdc-grid-tile">
		    	<div class="mdc-grid-tile__primary">
                    <slot name="primary"></slot>
		    	</div>
                <span class="mdc-grid-tile__secondary">
                    <slot name="secondary"></slot>
			    </span>
                <slot></slot>
			</li>
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

customElements.define("mdc-grid-tile", MdcGridTile)
