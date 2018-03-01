import { Element as	PolymerElement } from "../../@polymer/polymer/polymer-element.js"

export class MaterializeNavbarIcons extends PolymerElement {
	static get observers(){}
	static get template(){
	return `
	<!--STYLES-->
        <link rel="stylesheet" href="https://ipfs.io/ipfs/QmPWvEzDCdRQtEmFdZnDsnTdwnuBGW7VHzYyfHbRJY8uxw/materialize.min.css">
        <script href="https://ipfs.io/ipfs/QmPWvEzDCdRQtEmFdZnDsnTdwnuBGW7VHzYyfHbRJY8uxw/materialize.min.js"></script>
        nav.theme-primary {
          background: var(--theme-primary, #4B5B9B);
        }
    <!--END-STYLES-->

	<!--TEMPLATE-->
	    <nav class="theme-primary">
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
