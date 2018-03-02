import { Element as	PolymerElement } from "../../@polymer/polymer/polymer-element.js"

export class MaterializeNavbarCenterLogo extends PolymerElement {
    static get observers(){}
	static get template(){
    return `
        <!--STYLES-->
            <link rel="stylesheet" href="https://ipfs.io/ipfs/QmZwDkCGHCkoAzWa73vK4xV81WxS61P3JVNPhx4occJ79x/materialize.min.css">
            <script href="https://ipfs.io/ipfs/QmZwDkCGHCkoAzWa73vK4xV81WxS61P3JVNPhx4occJ79x/materialize.min.css"></script>
        <!--END-STYLES-->

        <!--TEMPLATE-->
			<nav>
                <div class="nav-wrapper">
                    <a href="#" class="brand-logo center">Logo</a>
                    <ul id="nav-mobile" class="left hide-on-med-and-down">
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

customElements.define("materialize-navbar-center-logo", MaterializeNavbarCenterLogo)
