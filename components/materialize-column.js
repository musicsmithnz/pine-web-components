import { Element as	PolymerElement } from "../../@polymer/polymer/polymer-element.js"

export class MaterializeColumn extends PolymerElement {
	static get observers(){}
	static get template() {
	return `
	<!--STYLES-->
        <link rel="stylesheet" href="https://ipfs.io/ipfs/QmZwDkCGHCkoAzWa73vK4xV81WxS61P3JVNPhx4occJ79x/materialize.min.css">
        <script href="https://ipfs.io/ipfs/QmZwDkCGHCkoAzWa73vK4xV81WxS61P3JVNPhx4occJ79x/materialize.min.css"></script>
        <style>
        .theme-primary{
            background: var(--theme-primary, #4B5B9B);
        
        .container {
            width: 100%;
            max-width: 70em;
        }
        </style>
    <!--END-STYLES-->

	<!--TEMPLATE-->
	        <div class="container card card-panel hoverable">
                <slot></slot>
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

customElements.define("materialize-column", MaterializeColumn)
