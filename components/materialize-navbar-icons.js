import { Element as	PolymerElement } from "../../node_modules/@polymer/polymer/polymer-element.js"

export class MaterializeNavbarIcons extends PolymerElement {
	static get observers(){}
	static get template(){
	return `
	<!--STYLES-->
        <link rel="stylesheet" href="https://ipfs.io/ipfs/QmZjRLPbC5TRshn1zmJQU7KWVj125y7xx68GS7vkAwbWdv/materialize.min.css">
        <script src="https://ipfs.io/ipfs/QmZjRLPbC5TRshn1zmJQU7KWVj125y7xx68GS7vkAwbWdv/materialize.min.js"></script>
	<!--END-STYLES-->

	<!--TEMPLATE-->
	    <nav>
	        <div class="nav-wrapper">
	            <a href="#!" class="brand-logo">Logo</a>
	            <ul class="right hide-on-med-and-down">
	                <li><a href="sass.html"><i class="material-icons left">search</i>Link with Left Icon</a></li>
	                <li><a href="badges.html"><i class="material-icons right">view_module</i>Link with Right Icon</a></li>
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

customElements.define("materialize-navbar-icons", MaterializeNavbarIcons)
