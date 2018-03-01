import { Element as	PolymerElement } from "../../node_modules/@polymer/polymer/polymer-element.js"

export class MaterializeNavbarRight extends PolymerElement {
	static get observers(){}
	static get template() {
	return `
	<!--STYLES-->
        <link rel="stylesheet" href="https://ipfs.io/ipfs/QmZjRLPbC5TRshn1zmJQU7KWVj125y7xx68GS7vkAwbWdv/materialize.min.css">
        <script src="https://ipfs.io/ipfs/QmZjRLPbC5TRshn1zmJQU7KWVj125y7xx68GS7vkAwbWdv/materialize.min.js"></script>
	<!--END-STYLES-->

	<!--TEMPLATE-->
	    <nav>
	        <div class="nav-wrapper">
	            <a href="#" class="brand-logo">Logo</a>
	            <ul id="nav-mobile" class="right hide-on-med-and-down">
	                <li><a href="sass.html">Sass</a></li>
                    <li><a href="badges.html">Components</a></li>
                    <li><a href="collapsible.html">JavaScript</a></li>
            	</ul>
        	</div>
	    </nav>
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

customElements.define("materialize-navbar-right", MaterializeNavbarRight)
