import { Element as	PolymerElement } from "/node_modules/@polymer/polymer/polymer-element.js"

export class MuiFormSelectGroups extends PolymerElement {
	static get observers(){
	
	
	}
	static get template() {
	return `
	<!--STYLES-->
		<link href="//cdn.muicss.com/mui-0.9.35/css/mui.min.css" rel="stylesheet" type="text/css" />
		<script src="//cdn.muicss.com/mui-0.9.35/js/mui.min.js"></script>
	<!--END-STYLES-->

	<!--TEMPLATE-->
		<form>
		    <div class="mui-select">
		        <select>
                	<optgroup label="Group 1">
                    	<option>Option 1</option>
                    	<option>Option 2</option>
            		</optgroup>
                	<optgroup label="Group 2">
                    	<option>Option 3</option>
                    	<option>Option 4</option>
            		</optgroup>
        		</select>
		        <label>Optgroups Example</label>
        	</div>
		    <button type="submit" class="mui-btn mui-btn--raised">Submit</button>
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

customElements.define("mui-form-select-groups", MuiFormSelectGroups)
