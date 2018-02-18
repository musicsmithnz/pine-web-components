import { Element as	PolymerElement } from "/node_modules/@polymer/polymer/polymer-element.js"

export class MuiFormCheckbox extends PolymerElement {
	static get observers(){}
	static get template(){
	return `
	<!--STYLES-->
        <link href="//cdn.muicss.com/mui-0.9.35/css/mui.min.css" rel="stylesheet" type="text/css" />
        <script src="//cdn.muicss.com/mui-0.9.35/js/mui.min.js"></script>
	<!--END-STYLES-->

	<!--TEMPLATE-->
        <form>
            <div class="mui-checkbox">
                <label>   
                    <input type="checkbox" value="" checked>
                    Option one
                </label>
        	</div>
            <div class="mui-checkbox">
                <label>
                	<input type="checkbox" value="">
                        Option two
                </label>
        	</div>
            <div class="mui-checkbox">
                <label>
                	<input type="checkbox" value="" disabled>
                	  Option three is disabled
                </label>
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

customElements.define("mui-form-checkbox", MuiFormCheckbox)
