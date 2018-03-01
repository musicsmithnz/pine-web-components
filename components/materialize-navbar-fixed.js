import { Element as	PolymerElement } from "../../@polymer/polymer/polymer-element.js"

export class MaterializeNavbarFixed extends PolymerElement {
	static get observers(){}
	static get template() {
	return `
	<!--STYLES-->
        <link rel="stylesheet" href="https://ipfs.io/ipfs/QmPWvEzDCdRQtEmFdZnDsnTdwnuBGW7VHzYyfHbRJY8uxw/materialize.min.css">
        <script href="https://ipfs.io/ipfs/QmPWvEzDCdRQtEmFdZnDsnTdwnuBGW7VHzYyfHbRJY8uxw/materialize.min.js"></script>
	<!--END-STYLES-->

	<!--TEMPLATE-->
        <div class="navbar-fixed">
	        <nav>
	            <div class="nav-wrapper">
	                <a href="#!" class="brand-logo">Logo</a>
	                <ul class="right hide-on-med-and-down">
	                    <li><a href="sass.html">Sass</a></li>
                    	<li><a href="badges.html">Components</a></li>
                	</ul>
        	    </div>
            </nav>
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

customElements.define("materialize-navbar-fixed", MaterializeNavbarFixed)
