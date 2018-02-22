import { Element as	PolymerElement } from "/node_modules/@polymer/polymer/polymer-element.js"

export class MaterializeFooter extends PolymerElement {
	static get observers(){}
	static get template() {
	return `
	<!--STYLES-->
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0-alpha.3/css/materialize.min.css">
        <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0-alpha.3/js/materialize.min.js"></script>
        <style>
        .theme-primary{
            background: var(--theme-primary);
        }
        .theme-primary-light{
            background: var(--theme-primary-light);
        }
        </style>
    <!--END-STYLES-->

	<!--TEMPLATE-->
	    <footer class="page-footer theme-primary">
	        <div class="container">
	            <div class="row">
	                <div class="col l6 s12">
	                    <h5 class="white-text">Footer Content</h5>
	                    <p class="grey-text text-lighten-4">You can use rows and columns here to organize your footer content.</p>
	                </div>
	                <div class="col l4 offset-l2 s12">
	                    <h5 class="white-text">Links</h5>
	                    <ul>
	                        <li><a class="grey-text text-lighten-3" href="#!">Link 1</a></li>
	                        <li><a class="grey-text text-lighten-3" href="#!">Link 2</a></li>
	                        <li><a class="grey-text text-lighten-3" href="#!">Link 3</a></li>
	                        <li><a class="grey-text text-lighten-3" href="#!">Link 4</a></li>
	                    </ul>
	                </div>
	            </div>
	        </div>
	        <div class="footer-copyright theme-primary-light">
	            <div class="container">
	                © 2018 Copyright Text
	                <a class="grey-text text-lighten-4 right" href="#!">More Links</a>
	            </div>
	        </div>
	    </footer>
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

customElements.define("materialize-footer", MaterializeFooter)
