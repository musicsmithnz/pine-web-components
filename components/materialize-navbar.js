import { Element as	PolymerElement } from "../../@polymer/polymer/polymer-element.js"

export class MaterializeNavbar extends PolymerElement {
	static get observers(){}
	static get template(){
	return `
	<!--STYLES-->
    	<link rel="stylesheet" href="https://ipfs.io/ipfs/QmPWvEzDCdRQtEmFdZnDsnTdwnuBGW7VHzYyfHbRJY8uxw/materialize.min.css">
        <style>
            nav.theme-primary{
                background: var(--theme-primary, #4B5B9B));
            }
        </style>
    <!--END-STYLES-->

	<!--TEMPLATE-->	
	        <nav class="navbar-fixed theme-primary">
            	<div class="nav-wrapper">
                	<a href="#!" class="brand-logo">Logo</a>
                    <ul class="left hide-on-med-and-down">
                        <slot name="left"></slot>
                	</ul>
                    <ul class="center hide-on-med-and-down">
                        <slot name="center"></slot>
                	</ul>
                    <ul class="right hide-on-med-and-down">
                        <slot name="right"></slot>
                	</ul>
        	    </div>
	        </nav>
	<!--END-TEMPLATE-->

	<!--SCRIPTS-->
	    <script href="https://ipfs.io/ipfs/QmPWvEzDCdRQtEmFdZnDsnTdwnuBGW7VHzYyfHbRJY8uxw/materialize.min.js"></script>
	<!--END-SCRIPTS-->
	`
	}
	static get properties() {
    	return {
	        name: String
	    }
	}
}

customElements.define("materialize-navbar", MaterializeNavbar)
