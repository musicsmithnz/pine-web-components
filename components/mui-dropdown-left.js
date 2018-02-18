import { Element as	PolymerElement } from "/node_modules/@polymer/polymer/polymer-element.js"

export class MuiDropdownLeft extends PolymerElement {
	static get observers(){}
	static get template(){
	return `
    	<!--STYLES-->
            <link href="//cdn.muicss.com/mui-0.9.35/css/mui.min.css" rel="stylesheet" type="text/css" />
            <script src="//cdn.muicss.com/mui-0.9.35/js/mui.min.js"></script>
        <!--END-STYLES-->

    	<!--TEMPLATE-->
        	<div class="mui-dropdown">
                <button class="mui-btn mui-btn--primary" data-mui-toggle="dropdown">
                	  Dropdown
                    <span class="mui-caret"></span>
                </button>
                <ul class="mui-dropdown__menu">
                    <li><a href="#">Option 1</a></li>
                    <li><a href="#">Option 2</a></li>
                    <li><a href="#">Option 3</a></li>
                    <li><a href="#">Option 4</a></li>
            	</ul>
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

customElements.define("mui-dropdown-left", MuiDropdownLeft)
