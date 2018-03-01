import { Element as	PolymerElement } from "../../node_modules/@polymer/polymer/polymer-element.js"

export class MuiGridFluid6x1 extends PolymerElement {
    static get observers(){}
	static get template(){
    return `
        <!--STYLES-->
            <link href="//cdn.muicss.com/mui-0.9.35/css/mui.min.css" rel="stylesheet" type="text/css" />
            <script src="//cdn.muicss.com/mui-0.9.35/js/mui.min.js"></script>
        <!--END-STYLES-->

        <!--TEMPLATE-->
			<div class="mui-row">
                <div class="mui-col-md-2"></div>
                <div class="mui-col-md-2"></div>
                <div class="mui-col-md-2"></div>
                <div class="mui-col-md-2"></div>
                <div class="mui-col-md-2"></div>
                <div class="mui-col-md-2"></div>
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

customElements.define("mui-grid-fluid-6x1", MuiGridFluid6x1)
