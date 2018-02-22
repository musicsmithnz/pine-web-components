import { Element as	PolymerElement } from "/node_modules/@polymer/polymer/polymer-element.js"

export class MaterializeTabs extends PolymerElement {
	static get observers(){}
	static get template(){
	return `
	<!--STYLES-->
    	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0-alpha.3/css/materialize.min.css">
        <style>
            .nav-content, .tabs, .nav-extended{
                background: var(--theme-primary, blue);
            }
        </style>
    <!--END-STYLES-->

	<!--TEMPLATE-->	
        <nav class="nav-extended">
            <div class="nav-content">
                <ul class="tabs tabs-transparent">
                    <li class="tab"><a class="active" href="[[link1]]">[[tab1]]</a></li>
                    <li class="tab"><a href="[[link2]]">[[tab2]]</a></li>
                    <li class="tab"><a href="[[link3]]">[[tab3]]</a></li>
                </ul>
            </div>
        </nav>
    <!--END-TEMPLATE-->

	<!--SCRIPTS-->
	    <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0-alpha.3/js/materialize.min.js"></script>
	<!--END-SCRIPTS-->
	`
	}
	static get properties() {
    	return {
	        name: String,
            tab1: String,
            tab2: String,
            tab3: String,
            link1: String,
            link2: String,
            link3: String
	    }
	}
}

customElements.define("materialize-tabs", MaterializeTabs)
