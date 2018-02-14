import { Element as	PolymerElement } from "/node_modules/@polymer/polymer/polymer-element.js"

export class MaterializeNavbarLeft extends PolymerElement {
    static get observers(){
    
    
    }
	static get template() {
    return `
        <!--STYLES-->
			<!--MATERIALIZE-->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0-alpha.3/css/materialize.min.css">
<script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0-alpha.3/js/materialize.min.js"></script>
<!--/MATERIALIZE-->
        <!--END-STYLES-->

        <!--TEMPLATE-->
			<nav>
    <div class="nav-wrapper">
          <a href="#" class="brand-logo right">Logo</a>
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

customElements.define("materialize-navbar-left", MaterializeNavbarLeft)
