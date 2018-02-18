import { Element as	PolymerElement } from "/node_modules/@polymer/polymer/polymer-element.js"

export class MuiFormRadio extends PolymerElement {
    static get observers(){}
	static get template(){
    return `
        <!--STYLES-->
			<link href="//cdn.muicss.com/mui-0.9.35/css/mui.min.css" rel="stylesheet" type="text/css" />
            <script src="//cdn.muicss.com/mui-0.9.35/js/mui.min.js"></script>
        <!--END-STYLES-->

        <!--TEMPLATE-->
			<form>
                <div class="mui-radio">
            	    <label>
            	        <input type="radio" name="optionsRadios" id="optionsRadios1" value="option1"checked>
                    	    Option one
            	    </label>
            	</div>
            	<div class="mui-radio">
        	        <label>
	                    <input type="radio" name="optionsRadios" id="optionsRadios2" value="option2">
        	            Option two
        		    </label>
            	</div>
	            <div class="mui-radio">
                    <label>
		                <input type="radio" name="optionsRadios" id="optionsRadios3" value="option3" disabled>
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

customElements.define("mui-form-radio", MuiFormRadio)
