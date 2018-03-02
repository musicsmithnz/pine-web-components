import { Element as	PolymerElement } from "../../@polymer/polymer/polymer-element.js"

export class MaterializeNavbar extends PolymerElement {
	static get observers(){}
	static get template(){
	return `
	<!--STYLES-->
    	<link rel="stylesheet" href="https://ipfs.io/ipfs/QmZwDkCGHCkoAzWa73vK4xV81WxS61P3JVNPhx4occJ79x/materialize.min.css">
        <style>
            nav.theme-primary{
                background: var(--theme-primary, #4B5B9B);
            }
        </style>
    <!--END-STYLES-->

	<!--TEMPLATE-->	
	        <nav class="navbar-fixed theme-primary">
            	<div class="nav-wrapper">
                	<a href="#!" class="brand-logo">Fog CDN</a>
                    <ul class="left hide-on-med-and-down">
                        <li class="tab"><a class="active" href="[[link1l]]">[[tab1l]]</a></li>
                        <li class="tab"><a href="[[link2l]]">[[tab2l]]</a></li>
                        <li class="tab"><a href="[[link3l]]">[[tab3l]]</a></li>
                	</ul>
                    <ul class="center hide-on-med-and-down">
                        <li class="tab"><a class="active" href="[[link1c]]">[[tab1c]]</a></li>
                        <li class="tab"><a href="[[link2c]]">[[tab2c]]</a></li>
                        <li class="tab"><a href="[[link3c]]">[[tab3c]]</a></li>
                	</ul>
                    <ul class="right hide-on-med-and-down">
                        <li class="tab"><a class="active" href="[[link1r]]">[[tab1r]]</a></li>
                        <li class="tab"><a href="[[link2r]]">[[tab2r]]</a></li>
                        <li class="tab"><a href="[[link3r]]">[[tab3r]]</a></li>
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
            tab1l: String,
            tab2l: String,
            tab3l: String,
            link1l: String,
            link2l: String,
            link3l: String,
            tab1c: String,
            tab2c: String,
            tab3c: String,
            link1c: String,
            link2c: String,
            link3c: String,
            tab1r: String,
            tab2r: String,
            tab3r: String,
            link1r: String,
            link2r: String,
            link3r: String
        }
	}
}

customElements.define("materialize-navbar", MaterializeNavbar)
