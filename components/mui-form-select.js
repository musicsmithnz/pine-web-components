import { Element as	PolymerElement } from "/node_modules/@polymer/polymer/polymer-element.js"

export class MuiFormSelect extends PolymerElement {
	static get observers(){
	
	
	}
	static get template() {
	return `
	<!--STYLES-->
        <link href="//cdn.muicss.com/mui-0.9.35/css/mui.min.css" rel="stylesheet" type="text/css" />
        <script src="//cdn.muicss.com/mui-0.9.35/js/mui.min.js"></script>
	<!--END-STYLES-->

	<!--TEMPLATE-->
    	<form class="mui-form">
    	    <legend>Title</legend>
        	<div class="mui-select">
            	<select>
            	    <option>Option 1</option>
                	<option>Option 2</option>
                	<option>Option 3</option>
                	<option>Option 4</option>
            	</select>
            	<label>Select Example</label>
        	</div>
    	</form>
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

customElements.define("mui-form-select", MuiFormSelect)
