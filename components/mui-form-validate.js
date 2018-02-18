import { Element as	PolymerElement } from "/node_modules/@polymer/polymer/polymer-element.js"

export class MuiFormValidate extends PolymerElement {
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
    	<div class="mui-textfield">
        	<input type="text" required>
    	    <label>Required Text Field</label>
    	</div>
    	<div class="mui-textfield mui-textfield--float-label">
        	<input type="email" required>
        	<label>Required Email Address</label>
    	</div>
    	<div class="mui-textfield mui-textfield--float-label">
        	<textarea required></textarea>
        	<label>Required Textarea</label>
    	</div>
    	<div class="mui-textfield mui-textfield--float-label">
        	<input type="email" value="Validation error">
        	<label>Email Address</label>
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

customElements.define("mui-form-validate", MuiFormValidate)
