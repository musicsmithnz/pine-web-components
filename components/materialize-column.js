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
        }
        section.main-column{
            background-color: #f8f9fa;
            display: flex;
            justify-content: center;
            align-items: center;
        }
        section.main-column .container{
            max-width: 60em;
            flex: 1 1 auto;
        }
        </style>
    <!--END-STYLES-->

	<!--TEMPLATE-->
        <section class="main-column">
	        <div class="container card card-panel">
                <slot></slot>
            </div>
        </section>
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
