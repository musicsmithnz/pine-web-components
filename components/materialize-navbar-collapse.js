import { Element as	PolymerElement } from "/node_modules/@polymer/polymer/polymer-element.js"

export class MaterializeNavbarCollapse extends PolymerElement {
	static get observers(){}
	static get template() {
	return `
	<!--STYLES-->
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0-alpha.3/css/materialize.min.css">
        <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0-alpha.3/js/materialize.min.js"></script>
	<!--END-STYLES-->

	<!--TEMPLATE-->	
        <nav>
	        <div class="nav-wrapper">
	            <a href="#!" class="brand-logo">Logo</a>
	            <a href="#" data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons">menu</i></a>
	            <ul class="right hide-on-med-and-down">
	                <li><a href="sass.html">Sass</a></li>
                	<li><a href="badges.html">Components</a></li>
                	<li><a href="collapsible.html">Javascript</a></li>
                	<li><a href="mobile.html">Mobile</a></li>
                </ul>
            </div>
        </nav>
	    <ul class="sidenav" id="mobile-demo">
            <li><a href="sass.html">Sass</a></li>
            <li><a href="badges.html">Components</a></li>
            <li><a href="collapsible.html">Javascript</a></li>
            <li><a href="mobile.html">Mobile</a></li>
    	</ul>
	<!--END-TEMPLATE-->

	<!--SCRIPTS-->
        <script>
	        var elem = document.querySelector('.sidenav');
            var instance = M.Sidenav.init(elem, options);
        </script>
	<!--END-SCRIPTS-->
	`
	}
	static get properties() {
	return {
	name: String
	}
	}
}

customElements.define("materialize-navbar-collapse", MaterializeNavbarCollapse)
