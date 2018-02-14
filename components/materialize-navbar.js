import { Element as	PolymerElement } from "/node_modules/@polymer/polymer/polymer-element.js"

export class MaterializeNavbar extends PolymerElement {
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

customElements.define("materialize-navbar", MaterializeNavbar)
