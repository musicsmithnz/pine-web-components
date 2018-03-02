import { Element as	PolymerElement } from "../../@polymer/polymer/polymer-element.js"

export class MaterializeTabs extends PolymerElement {
	static get observers(){}
	static get template(){
	return `
	<!--STYLES-->
    	<link rel="stylesheet" href="https://ipfs.io/ipfs/QmZwDkCGHCkoAzWa73vK4xV81WxS61P3JVNPhx4occJ79x/materialize.min.css">
        <style>
            nav.theme-primary {
                background: var(--theme-primary, #4B5B9B);
            }
        </style>
    <!--END-STYLES-->

	<!--TEMPLATE-->	
        <nav class="nav-extended theme-primary">
            <div class="nav-content">
                <ul class="tabs tabs-transparent">
                    <li class="tab"><a class="active" href="[[link1]]">[[tab1]]</a></li>
                    <li class="tab"><a href="[[link2]]">[[tab2]]</a></li>
                    <li class="tab"><a href="[[link3]]">[[tab3]]</a></li>
                </ul>
            </div>
        </nav>
    <!--END-TEMPLATE-->

	<!--SCRIPTS-->
	    <script href="https://ipfs.io/ipfs/QmZwDkCGHCkoAzWa73vK4xV81WxS61P3JVNPhx4occJ79x/materialize.min.js"></script>
	<!--END-SCRIPTS-->
	`
	}
	static get properties() {
    	return {
	        name: String,
            tab1: String,
            tab2: String,
            tab3: String,
            link1: String,
            link2: String,
            link3: String
	    }
	}
}

customElements.define("materialize-tabs", MaterializeTabs)
